# Generated by Django 5.1.3 on 2024-11-24 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0011_mysetting'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mysetting',
            name='fax_number',
        ),
        migrations.RemoveField(
            model_name='mysetting',
            name='mobile_phone',
        ),
        migrations.AlterField(
            model_name='mysetting',
            name='phone',
            field=models.CharField(blank=True, default='+96176596623', max_length=40, null=True),
        ),
    ]
