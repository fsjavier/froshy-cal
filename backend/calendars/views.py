from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from .models import Calendar, Event
from .serializers import CalendarSerializer, EventSerializer
from .permissions import IsCalendarMember
from users.models import CustomUser


class CalendarViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows calendars to be viewed or edited.
    """
    serializer_class = CalendarSerializer
    permission_classes = [IsAuthenticated, IsCalendarMember]
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    filterset_fields = ["name"]
    ordering_fields = ["name", "created_at"]
    search_fields = ["name", "description"]

    def get_queryset(self):
        return Calendar.objects.filter(members=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user, members=[self.request.user])

    @action(detail=True, methods=["post"])
    def add_member(self, request, pk=None):
        calendar = self.get_object()
        user_id = request.data.get("user_id")
        try:
            user = CustomUser.objects.get(id=user_id)
            if user not in calendar.members.all():
                calendar.members.add(user)
                return Response({"status": "member added"})
            else:
                return Response(
                    {"status": "user is already a member"}, status=status.HTTP_400_BAD_REQUEST
                )
        except CustomUser.DoesNotExist:
            return Response(
                {"status": "user not found"}, status=status.HTTP_404_NOT_FOUND
            )

    @action(detail=True, methods=["post"])
    def remove_member(self, request, pk=None):
        calendar = self.get_object()
        user_id = request.data.get("user_id")
        try:
            user = CustomUser.objects.get(id=user_id)
            if user in calendar.members.all() and user != calendar.owner:
                calendar.members.remove(user)
                return Response({"status": "member removed"})
            elif user == calendar.owner:
                return Response(
                    {"status": "cannot remove owner"}, status=status.HTTP_400_BAD_REQUEST
                )
            else:
                return Response(
                    {"status": "user is not a member"}, status=status.HTTP_400_BAD_REQUEST
                )
        except CustomUser.DoesNotExist:
            return Response(
                {"status": "user not found"}, status=status.HTTP_404_NOT_FOUND
            )


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows events to be viewed or edited.
    """
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated, IsCalendarMember]
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    filterset_fields = ["calendar", "start_time", "end_time"]
    ordering_fields = ["start_time", "end_time", "created_at"]
    search_fields = ["title", "description"]

    def get_queryset(self):
        return Event.objects.filter(calendar__members=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def create(self, request, *args, **kwargs):
        calendar_id = request.data.get("calendar")
        try:
            calendar = Calendar.objects.get(id=calendar_id)
            if not calendar.is_member(request.user):
                raise PermissionDenied(
                    "You don't have permission to create events in this calendar."
                )
        except Calendar.DoesNotExist:
            raise PermissionDenied("Calendar does not exist.")

        return super().create(request, *args, **kwargs)
