# Generated by Django 4.1.7 on 2023-02-27 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
        ('classes', '0002_alter_class_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='color',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='main.color'),
        ),
    ]
