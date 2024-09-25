from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserRegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    avatar = serializers.ImageField(required=False)

    class Meta:
        model = CustomUser
        fields = (
            'email',
            'password',
            'password2',
            'first_name',
            'last_name',
            'avatar'
        )

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return data

    def create(self, validated_data):
        validated_data.pop('password2', None)
        avatar = validated_data.pop('avatar', None)
        user = CustomUser.objects.create_user(**validated_data)
        if avatar:
            user.avatar = avatar
            user.save()
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Serializer for obtaining JWT tokens along with user details.
    """
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['avatar'] = user.avatar.url if user.avatar else None
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        data['user'] = {
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'avatar': user.avatar.url if user.avatar else None
        }
        return data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'avatar')