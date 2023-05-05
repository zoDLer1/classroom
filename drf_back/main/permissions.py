from rest_framework.permissions import BasePermission
from .mixins import (IsStudentPermissionMixin,
                     IsTeacherPermissionMixin,
                     IsMemberPermissionMixin,
                     IsCreatorPermissionMixin,
                     ReadOnlyPermissionMixin,
                     IsWaiterPermissionMixin,
                     ClassClosedPermissionMixin)


class IsStudent(BasePermission, IsStudentPermissionMixin):
    message = 'Эта функция доступна только студентам'

    def has_permission(self, request, view):
        return self.check_student(request)


class IsTeacher(BasePermission, IsTeacherPermissionMixin):
    message = 'Эта функция доступна только преподавателям'

    def has_permission(self, request, view):
        return self.check_teacher(request)


class IsWaiter(BasePermission, IsWaiterPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_waiter(request, obj)


class IsNotWaiter(IsWaiter):
    message = 'Запрос на вступление в этот класс уже отправлен'

    def has_object_permission(self, request, view, obj):
        return not super().has_object_permission(request, view, obj)


class IsMember(BasePermission, IsMemberPermissionMixin):
    message = 'Эта функция доступна только участникам этого класса'

    def has_object_permission(self, request, view, obj):
        return self.check_member(request, obj)


class IsNotMember(IsMember):
    message = 'Вы уже находитесь в этом классе'

    def has_object_permission(self, request, view, obj):
        return not super().has_object_permission(request, view, obj)


class IsCreator(BasePermission, IsCreatorPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_creator(request, obj)


class ReadOnly(BasePermission, ReadOnlyPermissionMixin):
    def has_permission(self, request, view):
        return self.check_read_only(request)


class IsTeacherOrMember(BasePermission, IsTeacherPermissionMixin, IsMemberPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_teacher(request) or self.check_member(request, obj)


class IsCreatorOrMember(BasePermission, IsCreatorPermissionMixin, IsMemberPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_creator(request, obj) or (request.method == 'GET' and self.check_member(request, obj))


class IsTeacherOrReadOnly(BasePermission, ReadOnlyPermissionMixin, IsTeacherPermissionMixin):
    def has_permission(self, request, view):
        return self.check_teacher(request) or self.check_read_only(request)


class IsNotClassClosed(BasePermission, ClassClosedPermissionMixin):
    message = "Класс закрыт для вступления"

    def has_object_permission(self, request, view, obj):
        return not self.check_class_status_is_closed(obj)


class InClassIsCreator(IsCreator):
    def has_object_permission(self, request, view, obj):
        return super().has_object_permission(request, view, obj._class)


class InClassIsMember(IsMember):
    def has_object_permission(self, request, view, obj):
        return super().has_object_permission(request, view, obj._class)


class InTestInClassIsMemberOrCreator(BasePermission,IsMemberPermissionMixin, IsCreatorPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_creator(request, obj.test._class) or self.check_member(request, obj.test._class)


class IsCreatorOrMemberReadOnly(BasePermission, IsCreatorPermissionMixin, IsMemberPermissionMixin, ReadOnlyPermissionMixin):
    def has_object_permission(self, request, view, obj):
        return self.check_creator(request, obj) or (self.check_read_only(request) and self.check_member(request, obj))


class InClassIsCreatorOrMemberReadOnly(IsCreatorOrMemberReadOnly):
    def has_object_permission(self, request, view, obj):
        return super().has_object_permission(request, view, obj._class)


class TestNotPassed(BasePermission):
    message = 'Тест уже пройден'

    def has_object_permission(self, request, view, obj):
        return not obj.passed_tests.filter(member__user=request.user).exists()
