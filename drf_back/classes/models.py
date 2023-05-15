from django.db import models
import uuid

# создание таблицы типов классов


class ClassType(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name

# создание таблицы классов

class Subject(models.Model):
    name = models.CharField(max_length=75)

    def __str__(self):
        return self.name


class Class(models.Model):
    # Определение пользователя как внешнего ключа
    creator = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=75)
    description = models.CharField(max_length=510, blank=True, null=True)
    # Определение типа как внешнего ключа
    type = models.ForeignKey(
        'ClassType', on_delete=models.DO_NOTHING, default=1)
    color = models.ForeignKey(
        'main.Color', on_delete=models.DO_NOTHING, default=1)
    subject = models.ForeignKey('Subject', on_delete=models.SET_NULL, null=True)
    code = models.UUIDField(default=uuid.uuid4, unique=True)

    def __str__(self):
        return self.name

class ClassSettings(models.Model):
    _class = models.OneToOneField(Class, on_delete = models.CASCADE, primary_key = True, related_name='settings')
    allow_view_members_list = models.BooleanField(default=True)


# создание таблицы участников
class Member(models.Model):
    # Определение пользователя как внешнего ключа
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    # Определение класса как внешнего ключа
    _class = models.ForeignKey(
        'Class', on_delete=models.CASCADE, related_name='members')

# создание таблицы ожидающих


class WaitingMember(models.Model):
    # Определение пользователя как внешнего ключа
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    # Определение класса как внешнего ключа
    _class = models.ForeignKey('Class', on_delete=models.CASCADE, related_name='waiters')
