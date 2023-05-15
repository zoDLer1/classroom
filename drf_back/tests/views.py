from .models import Template, Test, PassedTest
from .serializers import TemplatesSerializer, TestSerializer, PassedTestSerializer, TestsSerializer
from main.filters import OwnerFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, GenericAPIView, RetrieveAPIView
from main.permissions import IsCreator, IsTeacher, InClassIsCreatorOrMemberReadOnly, InClassIsMember, TestNotPassed, InTestInClassIsMemberOrCreator
from rest_framework.response import Response


class TemplatesAPIView(ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplatesSerializer
    permission_classes = (IsAuthenticated, IsTeacher)
    filter_backends = (OwnerFilterBackend, )


class TemplateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplatesSerializer
    permission_classes = (IsAuthenticated, IsCreator)


class TestsAPIView(CreateAPIView):

    queryset = Test.objects.all()
    serializer_class = TestsSerializer
    permission_classes = (IsAuthenticated, IsTeacher)


class TestAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    permission_classes = (IsAuthenticated, InClassIsCreatorOrMemberReadOnly)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"viewAnswers": False})
        return context


class PassTestAPIView(GenericAPIView):
    queryset = Test.objects.all()
    serializer_class = PassedTestSerializer
    permission_classes = (IsAuthenticated, InClassIsMember, ) # TestNotPassed

    def post(self, request, pk):
        self.test_instance = self.get_object()

        member = self.test_instance._class.members.get(user=request.user)

        serializer = self.get_serializer(
            data={'test': self.test_instance.id, 'member': member.id, **request.data})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        viewAnswers =  self.test_instance.settings.allow_view_answers_after_passing
        context.update({"test": self.test_instance, 'viewAnswers': viewAnswers})
        return context


class PassedTestAPIView(GenericAPIView):
    queryset = PassedTest.objects.all()
    serializer_class = PassedTestSerializer
    permission_classes = (IsAuthenticated, InTestInClassIsMemberOrCreator)

    def get(self, request, *args, **kwargs):
        self.instance = self.get_object()
        serializer = self.get_serializer(self.instance)
        return Response(serializer.data)


    def get_serializer_context(self):
        context = super().get_serializer_context()
        is_creator = self.instance.test._class.creator.id == context['request'].user.id
        viewAnswers =  self.instance.test.settings.allow_view_answers_after_passing or is_creator
        context.update({'viewAnswers': viewAnswers})
        return context
