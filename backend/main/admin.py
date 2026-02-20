from django.contrib import admin
from django.contrib.auth.models import Group

from main.models import MyUser

# Register your models here.

admin.site.register(MyUser)