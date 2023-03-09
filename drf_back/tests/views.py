from django.shortcuts import render
from .models import Template, Test
from .serializers import TestTemplatesSerializer, TestTemplateSerializer, TestsSerializer, TestsCreateSerializer
from main.filters import OwnerFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from main.permissions import IsTeacherOrAdmin, IsOwner
from rest_framework.response import Response

class TemplatesAPIView(ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TestTemplatesSerializer
    permission_classes = (IsAuthenticated, IsTeacherOrAdmin)
    filter_backends = (OwnerFilterBackend, )

class TemplateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Template.objects.all()
    serializer_class = TestTemplateSerializer
    permission_classes = (IsAuthenticated, IsOwner)


class TestsAPIView(CreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestsCreateSerializer
    permission_classes = (IsAuthenticated, IsTeacherOrAdmin)



# Create your views here.
