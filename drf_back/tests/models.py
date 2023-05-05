from django.db import models
from .validators import ValidateQuestion

class Template(models.Model):
    creator = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=75)
    description = models.CharField(max_length=510)


    def __str__(self):
        return self.name



class Question(models.Model):
    name = models.CharField(max_length=90, null=True, blank=True)
    time = models.IntegerField(null=True, blank=True)
    test = models.ForeignKey('Template', on_delete=models.CASCADE, related_name='questions')
    type = models.ForeignKey('AnswerType', on_delete=models.DO_NOTHING, default=1)

    @property
    def correct_answers(self):
        return self.answers.filter(isCorrect=True)

class AnswerType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Answer(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    question = models.ForeignKey('Question', on_delete=models.CASCADE, related_name='answers')
    isCorrect = models.BooleanField()
    value = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name



class Test(models.Model):
    template = models.ForeignKey('Template', on_delete=models.CASCADE)
    _class = models.ForeignKey('classes.Class', on_delete=models.CASCADE, related_name='tests')
    date = models.DateField(blank=True, null=True)
    

class PassedTest(models.Model):
    test = models.ForeignKey('Test', on_delete=models.CASCADE, related_name='passed_tests')
    member = models.ForeignKey('classes.Member', on_delete=models.CASCADE)
    deadline = models.DateField(auto_now_add=True)
    mark = models.IntegerField(blank=True, null=True)


    @property
    def results(self):
        passed_questions = self.passed_questions.all()
        correct_questions = [passed_question.is_correct for passed_question in passed_questions if passed_question.is_correct]
        return str(len(correct_questions) / passed_questions.count() * 100) + '%'
    
class PassedQuestion(models.Model):
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    passed_test = models.ForeignKey('PassedTest', on_delete=models.CASCADE, related_name='passed_questions')
    time = models.IntegerField(null=True, blank=True)

    @property
    def is_correct(self):
        return ValidateQuestion.validate(self)


class PassedAnswer(models.Model):
    answer = models.ForeignKey('Answer', on_delete=models.CASCADE)
    passed_question = models.ForeignKey('PassedQuestion', on_delete=models.CASCADE, related_name='passed_answers')
    value = models.CharField(max_length=50, null=True, blank=True)