from .models import Class
from .serializers import CLassSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .permissions import IsTeacherOrAdmin, IsOwnerOrReadOnly
from .filters import OwnerFilterBackend
from rest_framework.permissions import IsAuthenticated

class ClassesAPIView(ListCreateAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassSerializer
    permission_classes = (IsAuthenticated, IsTeacherOrAdmin)
    filter_backends = (OwnerFilterBackend, )

class ClassAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )