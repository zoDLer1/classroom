from django.urls import path
from .views import ClassAPIView, ClassesAPIView, JoinAPIView, AcceptRejectMemberAPIView, ExceptMemberAPIView


urlpatterns = [
    path('', ClassesAPIView.as_view()),
    path('<int:pk>', ClassAPIView.as_view()),
    path('join/<uuid:code>', JoinAPIView.as_view()),
    path('waiter/<int:pk>', AcceptRejectMemberAPIView.as_view()),
    path('member/<int:pk>', ExceptMemberAPIView.as_view()),
    
    
]