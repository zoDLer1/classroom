from rest_framework import serializers
from ..models import PassedTest, PassedQuestion, PassedAnswer

# ! REFACTOR


class PassedTestsSerializer(serializers.ModelSerializer):
    member = serializers.SerializerMethodField()  # ! fix

    class Meta:
        model = PassedTest
        fields = ['id', 'member', 'results']

    def get_member(self, instance):  # ! fix
        from classes.serializers import MemberSerializer
        return MemberSerializer(instance.member).data


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
    from .template import QuestionSerializer

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
    from .test import TestsSerializer

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
