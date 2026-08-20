from django.contrib import admin
from django.contrib.auth.models import Group

from main.models import MyUser, AdminRule, UserOrganization,Certificate, Organization

# Register your models here.

admin.site.register(MyUser)
admin.site.register(AdminRule)
admin.site.register(UserOrganization)
admin.site.register(Certificate)
admin.site.register(Organization)