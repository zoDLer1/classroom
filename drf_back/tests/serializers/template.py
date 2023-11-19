from rest_framework import serializers
from ..models import Template, Question, Answer, PassedQuestion, Test
from ..types.question import TEXT_FIELD, MANY_TO_MANY
from ..validators import ValidateQuestion


class AnswersSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Answer
        fields = ['id', 'name', 'isCorrect', 'value']

    def to_representation(self, instance):
        fields = super().to_representation(instance)
        viewAnswers = self.context.get('viewAnswers', True)
        
        if not viewAnswers:
            fields.pop('isCorrect')
            fields.pop('value')
        elif not fields.get('value', None):
            fields.pop('value')

        return fields

    def validate(self, attrs):
        data = super().validate(attrs)
        value = data.get('value', None)
        name = data.get('name', None)
        isCorrect = data.get('isCorrect', True)
        type = self.context['question_type']

        if type.id == TEXT_FIELD:
            if not value:
                raise serializers.ValidationError(
                    {"value": "Обязательное поле."})
            data['name'] = None
            if not isCorrect:
                raise serializers.ValidationError(
                    {"isCorrect": f'У типа вопроса `{type.name}` isCorrect не может быть False'})
        else:
            if not name:
                raise serializers.ValidationError(
                    {"name": "Обязательное поле."})
            data['value'] = None

        return data

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswersSerializer(many=True)
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(required=True)

    def validate_answers(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        return value

    def validate_type(self, value):
        self.context.update({'question_type': value})
        return value

    def validate(self, attrs):
        data = super().validate(attrs)
        question_type = data.get('type')
        question_answers = data.get('answers')
        count_corrected_answers = len(
            [True for question_answer in question_answers if question_answer['isCorrect']])

        if not count_corrected_answers:
            raise serializers.ValidationError(
                {"answers": f'Должен присутствовать хотя бы 1 корректный ответ'})

        if data.get('required', False) and data.get('time', None):
            raise serializers.ValidationError(
                {'time': 'Воросу с параметром `required` не может быть назначено время'})

        ValidateQuestion.validate(
            question_answers, count_corrected_answers, question_type)

        return data

    class Meta:
        model = Question
        fields = ['id', 'name', 'type', 'answers',
                  'time', 'required']

class QuestionStatisticSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(required=True)
    correct = serializers.SerializerMethodField()

    def get_correct(self, obj):
        passed_questions = obj.passed_questions.all()
        correct_count = 0
        for passed_question in passed_questions:
            if (passed_question.is_correct):
                correct_count += 1
        return round(correct_count/passed_questions.count(), 2)*100

    class Meta:
        model = Question
        fields = ['id', 'name', 'correct']

class TemplatesSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Template
        fields = ['id', 'name', 'description', 'creator', 'questions']

    def validate_questions(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        return value

    def create(self, validated_data):
        questions = validated_data.pop('questions')
        instance = Template.objects.create(**validated_data)
        for question in questions:
            answers = question.pop('answers')
            question_instance = Question.objects.create(
                **question, test=instance)
            for answer in answers:
                Answer.objects.create(**answer, question=question_instance)
        return instance

    def update(self, instance, validated_data):
        questions_data = validated_data.pop('questions', [])
        template = super().update(instance, validated_data)
        keep_questions = []

        for question in questions_data:
            question_instanse = self.update_question(question, template)
            if question_instanse:
                keep_questions.append(question_instanse.id)

        if questions_data:
            for question in instance.questions.all():
                if question.id not in keep_questions:
                    question.delete()

        return template

    def update_question(self, question, template):
        answers_data = question.pop('answers', [])
        keep_answers = []
        if 'id' in question.keys():
            questions_with_id = Question.objects.filter(id=question['id'])
            if questions_with_id.exists():
                question_with_id = questions_with_id[0]
                question_with_id.name = question.get(
                    'name', question_with_id.name)
                question_with_id.type = question.get(
                    'type', question_with_id.type)
                question_with_id.time = question.get(
                    'time', question_with_id.time)
                question_with_id.required = question.get(
                    'required', question_with_id.required)
                question_with_id.save()
                instance = question_with_id
            else:
                return
        else:
            instance = Question.objects.create(**question, test=template)

        for answer in answers_data:
            answer_instanse = self.update_answer(answer, instance)
            if answer_instanse:
                keep_answers.append(answer_instanse.id)

        if answers_data:
            for answer in instance.answers.all():
                if answer.id not in keep_answers:
                    answer.delete()

        return instance

    def update_answer(self, answer, question):
        if 'id' in answer.keys():
            answers_with_id = Answer.objects.filter(id=answer['id'])
            if answers_with_id.exists():
                answer_with_id = answers_with_id[0]
                answer_with_id.name = answer.get('name', answer_with_id.name)
                answer_with_id.isCorrect = answer.get(
                    'isCorrect', answer_with_id.isCorrect)
                answer_with_id.value = answer.get(
                    'value', answer_with_id.value)
                answer_with_id.save()
                instance = answer_with_id
            else:
                return
        else:
            instance = Answer.objects.create(**answer, question=question)
        return instance

class TemplatesSerializerList(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ['id', 'name', 'description']
