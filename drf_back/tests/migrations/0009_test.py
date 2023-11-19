# Generated by Django 4.1.7 on 2023-03-08 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0007_class_subject'),
        ('tests', '0008_alter_template_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.class')),
                ('template', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tests.template')),
            ],
        ),
    ]
