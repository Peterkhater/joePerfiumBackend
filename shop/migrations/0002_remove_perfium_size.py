# Generated by Django 5.1.3 on 2024-11-20 19:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='perfium',
            name='size',
        ),
    ]