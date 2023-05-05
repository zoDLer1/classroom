from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Template)
class TemplateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'time', 'test', 'type')

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'question', 'isCorrect', 'value')

@admin.register(AnswerType)
class AnswerTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ('id', 'template', '_class')

@admin.register(PassedTest)
class PassedTestAdmin(admin.ModelAdmin):
    list_display = ('id', 'test', 'member')

@admin.register(PassedQuestion)
class PassedQuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'passed_test', 'question')

@admin.register(PassedAnswer)
class PassedAnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'answer', 'passed_question', 'value')