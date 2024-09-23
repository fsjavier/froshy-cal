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
    Serializer for token obtain.
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
        email = attrs.get('email')
        password = attrs.get('password')

        user = CustomUser.objects.filter(email=email).first()
        if user and user.check_password(password):
            if not user.is_active:
                raise serializers.ValidationError({"non_field_errors": "User account is disabled."})

            # Proceed to generate token with super
            data = super().validate({'username': user.email, 'password': password})

            data['email'] = user.email
            data['first_name'] = user.first_name
            data['last_name'] = user.last_name
            data['avatar'] = user.avatar.url if user.avatar else None

            return data
        else:
            raise serializers.ValidationError({"non_field_errors": "Invalid email or password."})

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'avatar')