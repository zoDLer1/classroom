# Generated by Django 4.1.7 on 2023-03-13 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0007_class_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='description',
            field=models.CharField(blank=True, max_length=510, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='name',
            field=models.CharField(max_length=75),
        ),
    ]
