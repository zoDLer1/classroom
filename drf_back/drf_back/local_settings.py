from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-x&#4&(c4(2ja(9+m9s=_7ijq#cz89dh=q3yo(*r-wdfmq&qz&u'

DEBUG = True

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost"
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}