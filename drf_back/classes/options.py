from .serializers import CLassesListSerializer, WaitingMemberSerializer, MemberSerializer
from .models import Class, Member, WaitingMember
from drf_back.class_types import OPENED, BY_INVENTATION
from drf_back.roles import STUDENT, TEACHER

class ClassViewOptions:
    serializer = CLassesListSerializer
    model = Class

class MemberViewOptions:
    serializer = CLassesListSerializer
    model = Member

class WaitingMemberViewOptions:
    serializer = WaitingMemberSerializer
    model = WaitingMember

class MemberUserViewOptions:
    model = Member
    serializer = MemberSerializer

class ClassesViewOptions:

    view_options = {
        TEACHER: ClassViewOptions,
        STUDENT: MemberViewOptions
    }

    def get_queryset(self):
        return self.view_options[self.request.user.role.id].model.objects.all()

    def get_serializer_class(self):
        return self.view_options[self.request.user.role.id].serializer


class JoinViewOptions:

    view_options = {
        OPENED: MemberUserViewOptions,
        BY_INVENTATION: WaitingMemberViewOptions
    }

    def get_serializer_class(self):
        return self.view_options[self.instance.type.id].serializer


    