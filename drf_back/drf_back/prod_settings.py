from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-x&#4&(asdf21as21hdsx7ijq#cz89dh=q3yo(*r-wdfmq&qz&u'

DEBUG = False

ALLOWED_HOSTS = [
    "127.0.0.1"
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
