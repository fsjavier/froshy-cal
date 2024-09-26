from rest_framework import permissions
from .models import Calendar, Event

class IsCalendarMember(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if isinstance(obj, Calendar):
            return obj.is_member(request.user)
        elif isinstance(obj, Event):
            return obj.calendar.is_member(request.user)
        return False