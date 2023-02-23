from rest_framework import serializers
from .models import Class




class CLassSerializer(serializers.ModelSerializer):

    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Class
        fields = "__all__"
