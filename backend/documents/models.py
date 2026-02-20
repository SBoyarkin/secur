from django.db import models
from django.contrib.auth.models import Group
from main.models import MyUser

# Create your models here.

class Documents(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    template = models.FileField(upload_to='templates')
    allowed_groups = models.ManyToManyField(Group, blank=True,
                                            related_name='allowed_documents',
                                            verbose_name="Доступные группы")





class DocumetsUsers(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    documents = models.ForeignKey(Documents, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    valid = models.BooleanField(default=False)
    file = models.FileField(upload_to='documents')