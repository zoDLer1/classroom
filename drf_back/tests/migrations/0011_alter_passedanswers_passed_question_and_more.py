# Generated by Django 4.1.7 on 2023-03-14 04:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0010_alter_test__class_passedtest_passedquestion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passedanswers',
            name='passed_question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='passed_answers', to='tests.passedquestion'),
        ),
        migrations.AlterField(
            model_name='passedquestion',
            name='passed_test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='passed_questions', to='tests.passedtest'),
        ),
    ]