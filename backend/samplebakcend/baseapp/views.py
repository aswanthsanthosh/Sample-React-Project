from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UsersListSerializer
from rest_framework.permissions import IsAuthenticated
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .filters import UserFilter 
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class UserListView(ListAPIView):
    serializer_class = UsersListSerializer
    permission_classes = [IsAuthenticated ]
    filter_backends = [DjangoFilterBackend]
    filterset_class = UserFilter
    
    def get_queryset(self):
        return User.objects.filter(is_staff=False)
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        serializer = self.get_serializer(queryset, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            if user.is_suspended:
                return Response({'error': 'suspended user'}, status=status.HTTP_400_BAD_REQUEST)
            tokens = get_tokens_for_user(user)
            return Response({
                    'message': 'Logged in successfully',
                    'email': user.email,
                    'tokens': tokens
                }, status=200)
            # login(request, user)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    

    
