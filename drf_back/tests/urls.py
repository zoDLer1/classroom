from .views import TemplatesAPIView, TemplateAPIView, TestAPIView, PassTestAPIView, PassedTestAPIView, PassedTestQuestionAPIView, CreateDeleteTestAPIView
from django.urls import path

urlpatterns = [
    path('templates', TemplatesAPIView.as_view()),
    path('templates/<int:pk>', TemplateAPIView.as_view()),
    path('<int:pk>', TestAPIView.as_view()),
    path('', CreateDeleteTestAPIView.as_view()),
    path('pass/<int:pk>', PassTestAPIView.as_view()),
    path('passed/<int:pk>', PassedTestAPIView.as_view()),
    path('pass/<int:pk>/questions/<int:pq>', PassedTestQuestionAPIView.as_view())
]