# Generated by Django 4.1.7 on 2023-05-01 21:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0016_remove_template_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_query_name='questions', to='tests.template'),
        ),
    ]