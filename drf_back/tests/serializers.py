from rest_framework import serializers
from .models import Template, Question, Answer, AnswerType, Test


class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'name', 'isCorrect', 'value']

    def create(self, validated_data):
        return super().create(validated_data)

class QuestionSerializer(serializers.ModelSerializer):
    type = serializers.PrimaryKeyRelatedField(queryset=AnswerType.objects.all())
    answers = AnswersSerializer(many=True)
    

    class Meta:
        model = Question
        fields = ['id', 'name', 'type', 'answers']


class TestTemplateSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Template
        fields = ['id', 'name', 'description', 'creator', 'questions']

class TestTemplatesSerializer(TestTemplateSerializer):


    def create(self, validated_data):
        questions = validated_data.pop('questions')
        instance = Template.objects.create(**validated_data)
        for question in questions:
            answers = question.pop('answers')
            question_instance = Question.objects.create(**question, test=instance)
            for answer in answers:
                Answer.objects.create(**answer, question=question_instance)


        return instance





class TestsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', '_class', 'template']
        

class TestsSerializer(serializers.ModelSerializer):  
    
    class Meta:
        model = Test
        fields = ['id', 'template']
        depth = 1





