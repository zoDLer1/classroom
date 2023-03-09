from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('id', 'value')