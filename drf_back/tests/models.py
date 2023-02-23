from django.db import models


class Template(models.Model):
    creator = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=255)
    time = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    name = models.CharField(max_length=150)
    time = models.IntegerField()
    test = models.ForeignKey('Template', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class AnswerType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Answer(models.Model):
    name = models.CharField(max_length=150)
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    type = models.ForeignKey('AnswerType', on_delete=models.CASCADE)
    isCorrect = models.BooleanField()
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.name
