# Generated by Django 5.1.2 on 2024-10-12 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'male'), ('female', 'female'), ('other', 'other'), ('not prefer to say', 'not prefer to say')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='place_of_residence',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='registation_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
