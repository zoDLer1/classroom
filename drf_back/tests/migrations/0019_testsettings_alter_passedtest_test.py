# Generated by Django 4.1.7 on 2023-05-05 21:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0018_alter_question_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestSettings',
            fields=[
                ('test', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='settings', serialize=False, to='tests.test')),
                ('allow_view_answers_after_passing', models.BooleanField(default=True)),
            ],
        ),
        migrations.AlterField(
            model_name='passedtest',
            name='test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='passed_tests', to='tests.test'),
        ),
    ]
