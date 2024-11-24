from django.db import models


class Blog(models.Model):
    title = models.TextField(blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    blogImg = models.ImageField(upload_to='photos', null=False,blank=False,default='photos/N2-2.png')
    def __str__(self):
        return self.title  



class Gendar(models.Model):
    gender = models.CharField(max_length=20, null=False, blank=False)
    def __str__(self):
        return self.gender


class Perfium(models.Model):
    name = models.TextField(blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    high_price = models.DecimalField(max_digits=5, decimal_places=1)
    low_price = models.DecimalField(max_digits=5, decimal_places=1)
    gender = models.ForeignKey(to=Gendar, on_delete=models.CASCADE)  
    brandImage = models.ImageField(upload_to='photos', null=False, blank=False)
    smallText = models.CharField(default=' ',max_length=100)

    def __str__(self):
        return self.name

class PerfumSize(models.Model):
    size = models.CharField(blank=False,null=False , max_length=20)
    sizePrice = models.DecimalField(max_digits=5, decimal_places=1)
    
    def __str__(self):
        return self.size