from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from .models import Calendar, Event

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = [
            'id',
            'name',
            'description',
            'owner',
            'members',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['owner', 'created_at', 'updated_at']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id',
            'calendar',
            'title',
            'description',
            'start_time',
            'end_time',
            'created_by',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['created_by', 'created_at', 'updated_at']

    def validate(self, data):
        if data['start_time'] >= data['end_time']:
            raise ValidationError("End time must be after start time")
        return data
