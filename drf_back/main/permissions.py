from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsTeacherOrAdmin(BasePermission):

    def has_permission(self, request, view):
        return request.user.role.id in [1, 2]


class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.creator == request.user
    
class IsOwner(BasePermission):
     def has_object_permission(self, request, view, obj):
        return obj.creator == request.user