from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer, api_settings, authenticate, exceptions, update_last_login, get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.state import token_backend
from .models import User


class UserLoginSerializer(TokenObtainPairSerializer):

    default_error_messages = {
        "no_active_account": {get_user_model().USERNAME_FIELD: _("Пользователь не найден")}
    }

    def validate(self, attrs):
        tokens = super().validate(attrs)
        user_data = LoginSerializer(self.user).data
        return {
            "tokens": tokens,
            "user": user_data
        }

class RefreshTokenSerializer(TokenRefreshSerializer):
    
    def validate(self, attrs):
        tokens = super().validate(attrs)
        decoded_payload = token_backend.decode(tokens['access'], verify=True)
        user_data = LoginSerializer(User.objects.get(id=decoded_payload['user_id'])).data
        return {
            "tokens": tokens,
            "user": user_data
        }

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'avatar', 'role']

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(required=True, validators=[validate_password])
    password_confim = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'role', 'email', 'password', 'password_confim')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confim']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            role=validated_data['role'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        
        user.set_password(validated_data['password'])
        user.save()
        return user

# * serializer for view user in other serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'avatar']

