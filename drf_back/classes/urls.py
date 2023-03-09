from django.urls import path
from .views import ClassAPIView, ClassesAPIView, ClassTasksAPIView


urlpatterns = [
    path('', ClassesAPIView.as_view()),
    path('<int:pk>', ClassAPIView.as_view()),
    path('<int:pk>/tasks', ClassTasksAPIView.as_view())
]