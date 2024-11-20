from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.TextField(blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    # blogImg = models.ImageField(upload_to='photos', null=False, blank=False, default='images/blog1.jpg')  # Provide a default
    def __str__(self):
        return self.title  # Fixed to match field name


class Perfium(models.Model):
    
    GENDER =[
        ('male', 'Male'),
        ('female', 'Female'),
        ('uni', 'Unisex'),
    ]
    name = models.TextField(blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    high_price = models.DecimalField(max_digits=5, decimal_places=1)
    low_price = models.DecimalField(max_digits=5, decimal_places=1)
    gender = models.CharField(max_length=20, choices=GENDER, default='50ml')
    brandImage = models.ImageField(upload_to='photos', null=False,blank=False)

    # joeperfium