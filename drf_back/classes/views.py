from .models import Class
from .serializers import CLassTasksSerializer, CLassListSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from main.permissions import IsTeacherOrAdmin, IsOwnerOrReadOnly
from main.filters import OwnerFilterBackend
from rest_framework.permissions import IsAuthenticated

class ClassesAPIView(ListCreateAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassListSerializer
    permission_classes = (IsAuthenticated, IsTeacherOrAdmin)
    filter_backends = (OwnerFilterBackend, )

class ClassAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassListSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )


class ClassTasksAPIView(RetrieveAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassTasksSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )