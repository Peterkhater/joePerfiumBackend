# Generated by Django 5.1.3 on 2024-11-21 12:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_alter_perfium_gender_delete_gendar'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gendar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(max_length=20)),
            ],
        ),
        migrations.AlterField(
            model_name='perfium',
            name='gender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.gendar'),
        ),
    ]
