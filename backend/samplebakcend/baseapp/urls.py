from django.urls import path
from .views import LoginView, LogoutView, UserListView, EmailVerificationView, ChangePassword

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('users/', UserListView.as_view(), name='users'),
    path('verify/', EmailVerificationView.as_view(), name='verify'),
    path('password_change/', ChangePassword.as_view(), name='password_change')
]