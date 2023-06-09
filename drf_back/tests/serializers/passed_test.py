from rest_framework import serializers
from ..models import PassedTest, PassedQuestion, PassedAnswer
from ..types.question import MANY_TO_MANY
from collections import OrderedDict



class PassedTestsSerializer(serializers.ModelSerializer):
    from classes.serializers import MemberSerializer

    member = MemberSerializer()

    class Meta:
        model = PassedTest
        fields = ['id', 'member', 'results']


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
                  'passed_answers', 'is_correct', 'question_info']
        extra_kwargs = {
            'question': {'write_only': True},
        }

    def validate_question(self, value):
        if not self.context['test'].template.questions.filter(id=value.id).exists():
            raise serializers.ValidationError(f'Некоректный id вопроса `{value.id}`')
        
        
        self.context.update({'question': value, 'existing_answers': []})
        return value

    def validate_passed_answers(self, value):
        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        if self.context['question'].type.id != MANY_TO_MANY and len(value) > 1:
            raise serializers.ValidationError('На данный тип вопроса может быть только 1 ответ')
        return value


class PassedTestSerializer(serializers.ModelSerializer):
    from .test import TestsSerializer
    from classes.serializers import MemberSerializer

    passed_questions = PassedQuestionSerializer(many=True)
    test_info = TestsSerializer(read_only=True, source='test')
    member_info = MemberSerializer(read_only=True, source='member')
    _class = serializers.IntegerField(source='test._class.id', read_only=True)

    def validate_passed_questions(self, value):

        if not value:
            raise serializers.ValidationError('Поле не должно быть пустым')
        

        questions = self.context['test'].template.questions.all()
        
        existing_passed_questions_ids = [passed_question['question'].id for passed_question in value]
        print(existing_passed_questions_ids)
      

        for question in questions:
            if not question.id in existing_passed_questions_ids:
                if question.required:
                    raise serializers.ValidationError({'passed_questions': f'Вопрос `{question.id}` является обязательным'})
                value.append(OrderedDict({'question':question, 'passed_answers': [OrderedDict({'answer': None})]}))
            
        return value
        
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

    class Meta:
        model = PassedTest
        fields = ['id', 'test', 'member',
                  'passed_questions', 'test_info', 'member_info', '_class']
        extra_kwargs = {
            'test': {'write_only': True},
            'member': {'write_only': True},
        }
