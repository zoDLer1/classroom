from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Template)
class TemplateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'time')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'time', 'test')

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'question', 'type', 'isCorrect', 'value')

@admin.register(AnswerType)
class AnswerTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')