# Generated by Django 5.1.3 on 2024-11-24 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_perfium_smalltext'),
    ]

    operations = [
        migrations.RenameField(
            model_name='perfumsize',
            old_name='sizePrice',
            new_name='minPrice',
        ),
    ]