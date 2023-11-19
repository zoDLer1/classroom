from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Class)
class ClassAdmin(admin.ModelAdmin):
    list_display = ('id', 'creator', 'type', 'color', 'code')

@admin.register(ClassSettings)
class ClassSettingsAdmin(admin.ModelAdmin):
    list_display = ('_class', 'allow_view_members_list')

@admin.register(ClassType)
class ClassTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('id', '_class', 'user')

@admin.register(WaitingMember)
class WaitingMemberAdmin(admin.ModelAdmin):
    list_display = ('id', '_class', 'user')

@admin.register(Subject)
class SubjectMemberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
