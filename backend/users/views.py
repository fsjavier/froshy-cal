from rest_framework import generics
from .serializers import (
    UserRegisterSerializer,
    CustomTokenObtainPairSerializer,
    UserSerializer,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView


class UserRegisterView(generics.CreateAPIView):
    """
    API endpoint that allows users to be registered.
    """
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    API endpoint that allows users to obtain a token pair.
    """
    serializer_class = CustomTokenObtainPairSerializer


class UserDetailView(generics.RetrieveAPIView):
    """
    API endpoint that allows users to be retrieved.
    """
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user