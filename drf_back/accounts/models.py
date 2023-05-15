from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import UserManager

# Создание таблицы ролей пользователя
class Role(models.Model):
    name = models.CharField(_("name"), max_length=25)

    def __str__(self):
        return self.name
    

# Создание таблицы пользователей
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email"), unique=True, max_length=50)
    first_name = models.CharField(_("first name"), max_length=50)
    last_name = models.CharField(_("last name"), max_length=50)
    role = models.ForeignKey('Role', on_delete=models.DO_NOTHING) # Определение роли как внешнего ключа
    avatar = models.ImageField(upload_to='avatars', null=True, blank=True)
    is_staff = models.BooleanField(_('staff'), default=False) # Внутреннеe обязательноe поле Djago, которое дает доступ к встроеной панели аднимистрирования
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self) -> str:
        return self.get_full_name()

    # Возвращает данные в формате "{имя_пользователя} {фамилия_пользователя}"
    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()
    
    # Возвращает данные в формате "{имя_пользователя}"
    def get_short_name(self):
        return self.first_name

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')