from django.db import models

# Create your models here.


class ClassType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Class(models.Model):
    creator = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    type = models.ForeignKey('ClassType', on_delete=models.DO_NOTHING, default=1)
    color = models.ForeignKey('main.Color', on_delete=models.DO_NOTHING, default=1)

    def __str__(self):
        return self.name

class Member(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    _class = models.ForeignKey('Class', on_delete=models.CASCADE)

class WaitingMember(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    _class = models.ForeignKey('Class', on_delete=models.CASCADE)