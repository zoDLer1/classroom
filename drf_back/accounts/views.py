from .models import User
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer, UserLoginSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
import time

class LoginView(TokenObtainPairView):
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        refresh_token = response.data['tokens'].pop('refresh')
        response.set_cookie('refresh', refresh_token)
        return response

class CustomTokenRefreshView(TokenRefreshView):

    def post(self, request, *args, **kwargs): 
        serializer = self.get_serializer(data={'refresh': request.COOKIES.get('refresh'), **request.data})
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        time.sleep(2)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

class RegisterView(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serializer = self.get_auth_serializer(data={'password': request.data['password'], 'email': request.data['email']})
        serializer.is_valid(raise_exception=True)
        response_data = serializer.validated_data
        refresh_token = response_data.pop('refresh')
        response = Response(response_data)
        response.set_cookie('refresh', refresh_token)
        return response
    
    def get_auth_serializer(self, *args, **kwargs):
        serializer_class = UserLoginSerializer
        kwargs.setdefault('context', self.get_serializer_context())
        return serializer_class(*args, **kwargs)