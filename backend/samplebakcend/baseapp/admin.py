from django.contrib import admin
from .models import User
from .serializers import UserSerializer

# Register your models here.

admin.site.register(User)
