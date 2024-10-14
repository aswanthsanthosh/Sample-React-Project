from django_filters import FilterSet, CharFilter
from .models import User
from django.db.models import Q

class UserFilter(FilterSet):
    name = CharFilter(field_name='name', method='filter_name')
    
    class meta:
        model = User
        fields = {
        }
        
    def filter_name(self, queryset, name, value):
        if value:
            queryset = queryset.filter(Q(nick_name__icontains=value)| Q(email__icontains=value)).distinct()
        return queryset
        
            
            
    
    