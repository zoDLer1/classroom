from django.db import models


class Template(models.Model):
    creator = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=510)
    time = models.IntegerField(null=True, blank=True)
    

    def __str__(self):
        return self.name

class Question(models.Model):
    name = models.CharField(max_length=150, null=True, blank=True)
    time = models.IntegerField(null=True, blank=True)
    test = models.ForeignKey('Template', on_delete=models.CASCADE, related_name='questions')
    type = models.ForeignKey('AnswerType', on_delete=models.DO_NOTHING, default=1)

class AnswerType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Answer(models.Model):
    name = models.CharField(max_length=150, null=True, blank=True)
    question = models.ForeignKey('Question', on_delete=models.CASCADE, related_name='answers')
    isCorrect = models.BooleanField()
    value = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name

class Test(models.Model):
    template = models.ForeignKey('Template', on_delete=models.CASCADE)
    _class = models.ForeignKey('classes.Class', on_delete=models.CASCADE, related_name='tests')