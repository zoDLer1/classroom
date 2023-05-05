from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.utils.translation import gettext_lazy as _


class UserLoginSerializer(TokenObtainPairSerializer):

    default_error_messages = {
        "no_active_account": _("Пользователь не найден")
    }

    def validate(self, attrs):
        tokens = super().validate(attrs)
        user_data = UserSerializer(self.user).data
        return {
            "tokens": tokens,
            "user": user_data
        }


# * serializer for view user in other serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'avatar']
