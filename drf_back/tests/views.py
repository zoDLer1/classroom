from .models import Template, Test, PassedTest, Question
from .serializers import TemplatesSerializer, TestsSerializer, PassedTestSerializer, TestStatisticSerializer, QuestionSerializer, PassedQuestionSerializer, TestSerializer
from .filters import TemplateOwnerFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, get_object_or_404, CreateAPIView
from main.permissions import IsCreator, IsTeacher, InClassIsCreatorOrMemberReadOnly, InClassIsMember, InTestInClassIsMemberOrClassCreator, TestIsPassing, IsPassedTestOwner, QuestionNotPassed
from rest_framework.response import Response
from drf_back.roles import TEACHER
from .mixins import GetNextQuestionMixin


class TemplatesAPIView(ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplatesSerializer
    permission_classes = (IsAuthenticated, IsTeacher)
    filter_backends = (TemplateOwnerFilterBackend, )

class PassedTestQuestionAPIView(GenericAPIView, GetNextQuestionMixin):
    queryset = PassedTest.objects.all()
    questions_queryset = Question.objects.all()

    serializer_class = QuestionSerializer
    permission_classes = (IsAuthenticated, IsPassedTestOwner, TestIsPassing)

    def get_objects(self, *args, **kwargs):
        self.passed_test = self.get_object()
        self.question = get_object_or_404(self.questions_queryset, id=kwargs.get(
            'pq'), test__id=self.passed_test.test.template.id)

        permission = QuestionNotPassed()
        if not permission.has_object_permission(self.request, self.passed_test, self.question):
            response = self.get_next_passed_test_question(self.passed_test)
            self.permission_denied(
                self.request,
                message={'error': getattr(permission, 'message', None), **response},
                code=getattr(permission, 'code', None)
            )

        return self.question, self.passed_test

    def get(self, request, *args, **kwargs):
        self.get_objects(*args, **kwargs)
        serializer = self.get_serializer(self.question)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        self.get_objects(*args, **kwargs)
        data = {'question': self.question.id,
                'passed_test': self.passed_test.id, **request.data}
        serializer = PassedQuestionSerializer(
            data=data, context=self.get_serializer_context())
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = self.get_next_passed_test_question(self.passed_test)
        return Response(response)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"test": self.passed_test.test, 'viewAnswers': False})
        return context

class TemplateAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplatesSerializer
    permission_classes = (IsAuthenticated, IsCreator)

class CreateDeleteTestAPIView(CreateAPIView):
    queryset = Test.objects.all()
    permission_classes = (IsAuthenticated, InClassIsCreatorOrMemberReadOnly)
    serializer_class = TestsSerializer

class TestAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Test.objects.all()
    permission_classes = (IsAuthenticated, InClassIsCreatorOrMemberReadOnly)

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data
        if (self.request.user.role.id == TEACHER):
            if instance.passed_tests.filter(status__id=2).exists():
                serializer = TestStatisticSerializer(instance)
                data['statistic'] = serializer.data
        return Response(data)


    def get_serializer_class(self):
        if (self.request.user.role.id == TEACHER):
            return TestSerializer
        else:
            return TestsSerializer

class PassTestAPIView(GenericAPIView, GetNextQuestionMixin):
    queryset = Test.objects.all()
    serializer_class = PassedTestSerializer
    permission_classes = (IsAuthenticated, InClassIsMember)

    def create_passing_test(self, user):
        member = self.test_instance._class.members.get(user=user)
        serializer = self.get_serializer(
            data={'test': self.test_instance.id, 'member': member.id})
        serializer.is_valid(raise_exception=True)
        return serializer.save()

    def post(self, request, pk):
        self.test_instance = self.get_object()
        passed_tests = self.test_instance.passed_tests.filter(
            member__user=request.user)
        if (not passed_tests.count()):
            passed_test = self.create_passing_test(request.user)
        else:
            passed_test = passed_tests[0]

        response = self.get_next_passed_test_question(passed_test)

        return Response(response)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        viewAnswers = self.test_instance.settings.allow_view_answers_after_passing
        context.update({"test": self.test_instance,
                       'viewAnswers': viewAnswers})
        return context

class PassedTestAPIView(GenericAPIView):
    queryset = PassedTest.objects.all()
    serializer_class = PassedTestSerializer
    permission_classes = (IsAuthenticated, InTestInClassIsMemberOrClassCreator)

    def get(self, request, *args, **kwargs):
        self.instance = self.get_object()
        serializer = self.get_serializer(self.instance)
        return Response(serializer.data)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        is_creator = self.instance.test._class.creator.id == context['request'].user.id
        viewAnswers = self.instance.test.settings.allow_view_answers_after_passing or is_creator
        context.update({'viewAnswers': viewAnswers})
        return context

