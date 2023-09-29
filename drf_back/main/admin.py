from django.contrib import admin
from .models import *


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('id', 'value')