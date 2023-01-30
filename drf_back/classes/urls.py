from django.urls import path
from .views import ClassAPIView


urlpatterns = [
    path('', ClassAPIView.as_view())
]