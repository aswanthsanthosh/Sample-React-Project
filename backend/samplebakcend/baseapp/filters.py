from django_filters import FilterSet
from .models import User

class UserFilter(FilterSet):
    class Meta:
        model = User
        fields = {
            'nick_name': ['exact'],
            'email': ['exact']
        }