# Generated by Django 5.1.3 on 2024-11-20 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Perfium',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('description', models.TextField()),
                ('size', models.CharField(choices=[('30ml', '30ml'), ('50ml', '50ml'), ('100ml', '100ml')], default='50ml', max_length=20)),
                ('high_price', models.DecimalField(decimal_places=1, max_digits=5)),
                ('low_price', models.DecimalField(decimal_places=1, max_digits=5)),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('uni', 'Unisex')], default='50ml', max_length=20)),
                ('brandImage', models.ImageField(upload_to='photos')),
            ],
        ),
    ]
