from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.

class AuthUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(email, password, **extra_fields)

GENDER_CHOICES = (('male', 'male'),
                  ('female', 'female'),
                  ('other', 'other'),
                  ('not prefer to say', 'not prefer to say'))

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    nick_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=20,
                              choices=GENDER_CHOICES,
                              null=True, blank=True)
    place_of_residence = models.CharField(max_length=200,
                                          null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    registation_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_suspended = models.BooleanField(default=False)
    
    objects = AuthUserManager()

    USERNAME_FIELD = 'email'
    
    def __str__(self):
        return self.nick_name
    
    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        return self.is_superuser  # Grant all permissions to superuser

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        return self.is_superuser  # Grant all module permissions to superuser
    
    
    
    
    
    

