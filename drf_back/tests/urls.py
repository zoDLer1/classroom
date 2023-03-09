from .views import TemplatesAPIView, TemplateAPIView, TestsAPIView
from django.urls import path

urlpatterns = [
    path('', TemplatesAPIView.as_view()),
    path('<int:pk>', TemplateAPIView.as_view()),
    path('tasks', TestsAPIView.as_view())
]