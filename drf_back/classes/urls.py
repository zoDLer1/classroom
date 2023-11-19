from django.urls import path
from .views import ClassAPIView, ClassesAPIView, JoinAPIView, AcceptRejectMemberAPIView, ExceptMemberAPIView, SubjectAPIView, ColorAPIView, TypeAPIVIew


urlpatterns = [
    path('', ClassesAPIView.as_view()),
    path('<int:pk>', ClassAPIView.as_view()),
    path('join/<uuid:code>', JoinAPIView.as_view()),
    path('waiter/<int:pk>', AcceptRejectMemberAPIView.as_view()),
    path('member/<int:pk>', ExceptMemberAPIView.as_view()),
    path('subjects', SubjectAPIView.as_view()),
    path('colors', ColorAPIView.as_view()),
    path('types', TypeAPIVIew.as_view())   
]