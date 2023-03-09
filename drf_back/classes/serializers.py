from rest_framework import serializers
from .models import Class
from tests.serializers import TestsSerializer



class CLassListSerializer(serializers.ModelSerializer):
    color = serializers.CharField(source='color.value', read_only=True)
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Class
        fields = "__all__"



class CLassTasksSerializer(serializers.ModelSerializer):
    tests = TestsSerializer(many=True)

    class Meta:
        model = Class
        fields = ['tests']
        

