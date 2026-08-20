from django.contrib.auth.models import AbstractUser, Group
from django.db import models
# Create your models here.


class CustomAbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Organization(CustomAbstractModel):
    short_name = models.CharField(max_length=255)
    short_name_dative = models.CharField(max_length=255)
    short_name_genitive = models.CharField(max_length=255)
    full_name = models.CharField(max_length=500)
    inn = models.CharField(max_length=10)
    kpp = models.CharField(max_length=9)
    ogrn = models.CharField(max_length=13)
    phone = models.CharField(max_length=15, null=True)
    director = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Информация об организации"
        verbose_name_plural = "Информация об организациях"

    def __str__(self):
        return self.short_name

    @property
    def get_dict(self):
        return (
            {'short_name': self.short_name,
             'short_name_dative': self.short_name_dative,
             'short_name_genitive': self.short_name_genitive,
             'full_name': self.full_name,
             'inn': self.inn,
             'kpp': self.kpp,
             'ogrn': self.ogrn,
             'phone': self.phone,
             'director': self.director,
             },
        )


class MyUser(AbstractUser):
    # Информация о пользователе
    is_admin = models.BooleanField(default=False)
    snils = models.CharField(max_length=20)
    middle_name = models.CharField(max_length=30)
    organization = models.ManyToManyField(Organization, related_name='user', blank=True, through='UserOrganization')
    manages = models.ManyToManyField(Organization, related_name='administrator', blank=True, through='AdminRule')
    groups = models.ManyToManyField(Group, related_name='user_set', blank=True)

    class Meta:
        verbose_name = "Информация о пользователе"
        verbose_name_plural = "Информация о пользователях"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class AdminRule(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    main = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Администрирование организации"
        verbose_name_plural = "Администрирование организаций"

class UserOrganization(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    position = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Должности пользователя"


class Certificate(models.Model):
    serial_number = models.CharField(max_length=150, unique=True)
    cn = models.CharField(max_length=100, null=True, blank=True)
    given_name = models.CharField(max_length=100, null=True, blank=True)
    sur_name = models.CharField(max_length=100, null=True, blank=True)
    o = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    snils = models.CharField(max_length=10)
    inn = models.CharField(max_length=10)
    ogrn = models.CharField(max_length=15, null=True, blank=True)
    owner = models.ForeignKey(MyUser, null=True, blank=True, on_delete=models.CASCADE, related_name='certificates')
    certificate = models.FileField(upload_to='certificates')
    byte_certificate = models.BinaryField(default=None, null=True, blank=True)
    not_valid_after = models.DateTimeField()
    not_valid_before = models.DateTimeField()

    class Meta:
        verbose_name = "Сертификат"
        verbose_name_plural = "Сертификаты"



