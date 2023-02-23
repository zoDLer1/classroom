from django.urls import path
from .views import ClassAPIView, ClassesAPIView


urlpatterns = [
    path('', ClassesAPIView.as_view()),
    path('<int:pk>', ClassAPIView.as_view())
]