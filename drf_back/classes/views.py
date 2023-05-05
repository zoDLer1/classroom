from .models import Class, WaitingMember, Member
from .serializers import CLassSerializer, MemberSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, DestroyAPIView
from main.permissions import IsTeacherOrReadOnly, IsStudent, IsCreatorOrMember, IsNotWaiter, IsNotMember, IsNotClassClosed, InClassIsCreator, IsCreatorOrMemberReadOnly
from main.filters import OwnerFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .options import ClassesViewOptions, JoinViewOptions
from drf_back.class_types import SUCCESS_RESPONSE_MESSAGE


class ClassesAPIView(ClassesViewOptions, ListCreateAPIView):

    permission_classes = (IsAuthenticated, IsTeacherOrReadOnly)
    filter_backends = (OwnerFilterBackend, )


class ClassAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = CLassSerializer
    permission_classes = (IsAuthenticated, IsCreatorOrMemberReadOnly)


class JoinAPIView(JoinViewOptions, GenericAPIView):

    lookup_field = 'code'
    lookup_url_kwarg = 'code'
    permission_classes = (IsAuthenticated, IsStudent,
                          IsNotWaiter, IsNotMember, IsNotClassClosed)
    queryset = Class.objects.all()

    def post(self, request, code):
        self.instance = self.get_object()
        serializer = self.get_serializer(
            data={'_class': self.instance.id, 'user': request.user.id})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'detail': SUCCESS_RESPONSE_MESSAGE[self.instance.type.id]})


class AcceptRejectMemberAPIView(GenericAPIView):

    permission_classes = (IsAuthenticated, InClassIsCreator)
    queryset = WaitingMember.objects.all()
    serializer_class = MemberSerializer

    def post(self, request, pk):
        instance = self.get_object()
        serializer = self.get_serializer(
            data={'_class': instance._class.id, 'user': instance.user.id})
        serializer.is_valid(raise_exception=True)
        instance.delete()
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk):
        instance = self.get_object()
        instance.delete()
        return Response()


class ExceptMemberAPIView(DestroyAPIView):
    queryset = Member.objects.all()
    permission_classes = (IsAuthenticated, InClassIsCreator)
