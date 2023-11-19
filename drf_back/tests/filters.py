from rest_framework import filters

class TemplateOwnerFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(creator=request.user)

