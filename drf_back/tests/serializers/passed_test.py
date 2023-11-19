from rest_framework import serializers
from ..models import PassedTest, PassedQuestion, PassedAnswer
from ..types.question import MANY_TO_MANY
from collections import OrderedDict


class PassedTestsSerializer(serializers.ModelSerializer):
    from classes.serializers import MemberSerializer

    member = MemberSerializer()

    class Meta:
        model = PassedTest
        fields = ['id', 'member', 'results', 'status']

class PassedAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = PassedAnswer
        fields = ['id', 'answer', 'value']

    def validate_answer(self, value):
        answers = self.context['question'].answers.filter(id=value.id)
        existing_answers = self.context['existing_answers']
        if not answers.exists():
            raise serializers.ValidationError(
                f'Некоректный id ответа `{value.id}`')
        if answers[0].id in existing_answers:
            raise serializers.ValidationError(f'Нельзя отвечать несколько раз')

        existing_answers.append(answers[0].id)
        self.context.update({'existing_answers': existing_answers})

        return value

class PassedQuestionSerializer(serializers.ModelSerializer):
    from .template import QuestionSerializer

    question_info = QuestionSerializer(read_only=True, source='question')
    passed_answers = PassedAnswerSerializer(many=True)

    class Meta:
        model = PassedQuestion
        fields = ['id', 'question', 'time',
                  'passed_answers', 'passed_test', 'is_correct', 'question_info']
        extra_kwargs = {
            'question': {'write_only': True},
            'passed_test': {'write_only': True}
        }

    def validate_question(self, value):
        if not self.context['test'].template.questions.filter(id=value.id).exists():
            raise serializers.ValidationError(
                f'Некоректный id вопроса `{value.id}`')

        self.context.update({'question': value, 'existing_answers': []})
        return value

    def validate_passed_answers(self, value):
        if not value:
            return [OrderedDict({'answer': None})]
        if self.context['question'].type.id != MANY_TO_MANY and len(value) > 1:
            raise serializers.ValidationError(
                'На данный тип вопроса может быть только 1 ответ')
        return value

    def create(self, validated_data):
        passed_answers = validated_data.pop('passed_answers')

        insatnce = super().create(validated_data)
        for passed_answer in passed_answers:
            PassedAnswer.objects.create(
                **passed_answer, passed_question=insatnce)
        return insatnce
    
class PassedTestSerializer(serializers.ModelSerializer):
    from .test import TestsSerializer
    from classes.serializers import MemberSerializer

    passed_questions = PassedQuestionSerializer(many=True, read_only=True)
    test_info = TestsSerializer(read_only=True, source='test')
    member_info = MemberSerializer(read_only=True, source='member')
    _class = serializers.IntegerField(source='test._class.id', read_only=True)


    class Meta:
        model = PassedTest
        fields = ['id', 'test', 'member', 'test_info', 'member_info', '_class', 'passed_questions']
        extra_kwargs = {
            'test': {'write_only': True},
            'member': {'write_only': True},
        }
