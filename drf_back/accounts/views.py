from .models import User
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer, UserLoginSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

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
        return Response(serializer.validated_data)
    
    def get_auth_serializer(self, *args, **kwargs):
        serializer_class = UserLoginSerializer
        kwargs.setdefault('context', self.get_serializer_context())
        return serializer_class(*args, **kwargs)