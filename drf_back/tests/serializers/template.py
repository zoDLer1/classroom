from rest_framework import serializers
from ..models import Template, Question, Answer

# ! REFACTOR


class CorrectAnswersSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Answer
        fields = ['id', 'value']


class AnswersSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Answer
        fields = ['id', 'name', 'isCorrect', 'value']
        extra_kwargs = {
            'isCorrect': {'write_only': True},
            'value': {'write_only': True},
        }

    def validate(self, attrs):
        data = super().validate(attrs)
        value = data.get('value', None)
        name = data.get('name', None)
        type = self.context['question_type'].id
        if type == 1 and not value:  # ! constant
            raise serializers.ValidationError({"value": "Обязательное поле."})
        elif not name and type != 1:
            raise serializers.ValidationError({"name": "Обязательное поле."})

        if type != 1:
            data['value'] = None
        else:
            data['name'] = None
        return data


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswersSerializer(many=True)
    correct_answers = CorrectAnswersSerializer(many=True, read_only=True)
    time = serializers.IntegerField(required=False)
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(required=True)

    def validate_answers(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        if self.context['question_type'].id != 3 and len(value) > 1:
            raise serializers.ValidationError(
                'На данный тип вопроса может быть только 1 ответ')
        return value

    def validate_type(self, value):
        self.context.update({'question_type': value})
        return value

    def to_representation(self, instance):
        fields = super().to_representation(instance)
        if not self.context.get('viewAnswers', True):
            fields.pop('correct_answers')
        return fields

    class Meta:
        model = Question
        fields = ['id', 'name', 'type', 'answers', 'time', 'correct_answers']


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
