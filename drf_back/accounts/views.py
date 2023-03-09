from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response


class UserAPIView(APIView):
    def get(self, request):
        serializer = UserSerializer(instance=request.user)
        # serializer.is_valid(raise_exception=True)
        return Response(serializer.data)

