from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        
class UsersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "nick_name", "gender", "place_of_residence",
                  "date_of_birth", "registation_date"]