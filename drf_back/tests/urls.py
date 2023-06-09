from .views import TemplatesAPIView, TemplateAPIView, TestsAPIView, TestAPIView, PassTestAPIView, PassedTestAPIView, PassedTestStatisticsAPIView
from django.urls import path

urlpatterns = [
    path('templates', TemplatesAPIView.as_view()),
    path('templates/<int:pk>', TemplateAPIView.as_view()),
    path('', TestsAPIView.as_view()),
    path('<int:pk>', TestAPIView.as_view()),
    path('pass/<int:pk>', PassTestAPIView.as_view()),
    path('passed/<int:pk>', PassedTestAPIView.as_view()),
    path('<int:pk>/statistics', PassedTestStatisticsAPIView.as_view())
]