# Generated by Django 5.1.3 on 2024-11-24 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_rename_sizeprice_perfumsize_minprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='perfium',
            name='sizes',
            field=models.ManyToManyField(to='shop.perfumsize'),
        ),
        migrations.AddField(
            model_name='perfumsize',
            name='high_size',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=5),
        ),
        migrations.AlterField(
            model_name='perfumsize',
            name='minPrice',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=5),
        ),
    ]
