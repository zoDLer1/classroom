from rest_framework import generics
from .models import Class
from .serializers import CLassSerializer

# Create your views here.
class ClassAPIView(generics.ListAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassSerializer