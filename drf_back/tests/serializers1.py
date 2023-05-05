from rest_framework import serializers
from .models import Template, Question, Answer, PassedTest, PassedQuestion, PassedAnswer, Test
from drf_back.roles import TEACHER


class PassedTestsSerializer(serializers.ModelSerializer):
    member = serializers.SerializerMethodField()  # ! fix

    class Meta:
        model = PassedTest
        fields = ['id', 'member', 'results']

    def get_member(self, instance):  # ! fix
        from classes.serializers import MemberSerializer
        return MemberSerializer(instance.member).data


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


class TestValidators:
    def validate__class(self, value):
        if not value.creator == self.context['request'].user:
            raise serializers.ValidationError(
                'Вы должны быть создателем класса')
        return value

    def validate_template(self, value):
        if not value.creator == self.context['request'].user:
            raise serializers.ValidationError(
                'Вы должны быть создателем шаблона')
        return value


class TestsSerializer(serializers.ModelSerializer, TestValidators):
    name = serializers.CharField(source='template.name', read_only=True)
    description = serializers.CharField(
        source='template.description', read_only=True)

    class Meta:
        model = Test
        fields = ['id', '_class', 'template', 'name', 'description', 'date']

        extra_kwargs = {
            'template': {'write_only': True},
            '_class': {'write_only': True},
        }


class TestSerializer(serializers.ModelSerializer, TestValidators):

    template = TemplatesSerializer(read_only=True)
    passed_tests = PassedTestsSerializer(many=True)

    class Meta:
        model = Test
        fields = ['id', 'template', 'passed_tests', 'date']

    def to_representation(self, instance):
        fields = super(TestSerializer, self).to_representation(instance)
        if not self.context['request'].user.role.id == TEACHER:
            fields.pop('passed_tests')
        else:
            fields.pop('template')

        return fields


class PassedAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = PassedAnswer
        fields = ['id', 'answer', 'value']

    def validate_answer(self, value):
        answers = self.context['question'].answers.filter(id=value.id)
        existing_answers = self.context['existing_answers']
        if not answers.exists():
            raise serializers.ValidationError(
                f'Некоректный id вопроса \"{value.id}\"')
        if answers[0].id in existing_answers:
            raise serializers.ValidationError(f'Нельзя отвечать несколько раз')

        existing_answers.append(answers[0].id)
        self.context.update({'existing_answers': existing_answers})

        return value


class PassedQuestionSerializer(serializers.ModelSerializer):
    question = QuestionSerializer()
    passed_answers = PassedAnswerSerializer(many=True)

    class Meta:
        model = PassedQuestion
        fields = ['id', 'question', 'time', 'passed_answers', 'is_correct']

    def validate_question(self, value):
        # ! check if requeired

        if not self.context['test'].template.questions.filter(id=value.id).exists():
            raise serializers.ValidationError(
                f'Некоректный id вопроса \"{value.id}\"')

        self.context.update({'question': value, 'existing_answers': []})

        return value

    def validate_passed_answers(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        if self.context['question'].type.id != 3 and len(value) > 1:
            raise serializers.ValidationError(
                'На данный тип вопроса может быть только 1 ответ')
        return value


class PassedTestSerializer(serializers.ModelSerializer):
    passed_questions = PassedQuestionSerializer(many=True)
    test = TestsSerializer()
    member = serializers.SerializerMethodField()  # ! fix

    def get_member(self, instance):  # ! fix
        from classes.serializers import MemberSerializer
        return MemberSerializer(instance.member).data

    def to_representation(self, instance):  # ! mb
        if (instance.test._class.creator.id == self.context['request'].user.id):
            self.context.update({'viewAnswers': True})
        return super().to_representation(instance)

    def validate_passed_questions(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        return value

    class Meta:
        model = PassedTest
        fields = ['id', 'test', 'member', 'passed_questions']

    def create(self, validated_data):
        passed_questions = validated_data.pop('passed_questions')
        passed_test = PassedTest.objects.create(**validated_data)
        for passed_question in passed_questions:
            passed_answers = passed_question.pop('passed_answers')
            passed_question = PassedQuestion.objects.create(
                **passed_question, passed_test=passed_test)
            for passed_answer in passed_answers:
                PassedAnswer.objects.create(
                    **passed_answer, passed_question=passed_question)

        return passed_test
