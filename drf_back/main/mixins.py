from drf_back.roles import TEACHER, STUDENT
from rest_framework.permissions import SAFE_METHODS
from drf_back.class_types import CLOSED

class IsTeacherPermissionMixin:
    def check_teacher(self, request):
        return request.user.role.id == TEACHER


class IsStudentPermissionMixin:
    def check_student(self, request):
        return request.user.role.id == STUDENT


class IsMemberPermissionMixin:
    def check_member(self, request, obj):
        return obj.members.filter(user=request.user).exists()


class IsWaiterPermissionMixin:
    def check_waiter(self, request, obj):
        return obj.waiters.filter(user=request.user).exists()


class IsCreatorPermissionMixin:
    def check_creator(self, request, obj):
        return obj.creator == request.user


class ReadOnlyPermissionMixin:
    def check_read_only(self, request):
        return request.method in SAFE_METHODS


class ClassClosedPermissionMixin:
    def check_class_status_is_closed(self, obj):
        return obj.type.id == CLOSED