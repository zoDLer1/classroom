# Generated by Django 4.1.7 on 2023-09-08 19:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0022_teststatus'),
    ]

    operations = [
        migrations.AddField(
            model_name='passedtest',
            name='status',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='tests.teststatus'),
        ),
    ]