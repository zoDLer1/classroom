from rest_framework import filters
import drf_back.roles


class ClassesFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(creator=request.user) if request.user.role.id == drf_back.roles.TEACHER else [member._class for member in queryset.filter(user=request.user)]

