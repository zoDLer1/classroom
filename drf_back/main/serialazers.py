from rest_framework import serializers
from .models import Color

class ColorSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = "__all__"