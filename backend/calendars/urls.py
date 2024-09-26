from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CalendarViewSet, EventViewSet

router = DefaultRouter()
router.register(r'calendars', CalendarViewSet, basename='calendar')
router.register(r'events', EventViewSet, basename='event')

urlpatterns = [
    path('', include(router.urls)),
]