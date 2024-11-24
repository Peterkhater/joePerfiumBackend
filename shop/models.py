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


# class Perfium(models.Model):
#     name = models.TextField(blank=False, null=False)
#     description = models.TextField(blank=False, null=False)
#     high_price = models.DecimalField(max_digits=5, decimal_places=1)
#     low_price = models.DecimalField(max_digits=5, decimal_places=1)
#     gender = models.ForeignKey(to=Gendar, on_delete=models.CASCADE)  
#     brandImage = models.ImageField(upload_to='photos', null=False, blank=False)
#     smallText = models.CharField(default=' ',max_length=100)
#     sizes = models.ManyToManyField('PerfumeSize')

#     def __str__(self):
#         return self.name

# class PerfumSize(models.Model):
#     size = models.CharField(blank=False,null=False , max_length=20)
#     minPrice = models.DecimalField(max_digits=5, decimal_places=1)
#     high_size = models.DecimalField(max_digits=5, decimal_places=1)

#     def __str__(self):
#         return self.size


class Perfium(models.Model):  # Corrected model name to 'Perfume'
    name = models.TextField(blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    high_price = models.DecimalField(max_digits=5, decimal_places=1)
    low_price = models.DecimalField(max_digits=5, decimal_places=1)
    gender = models.ForeignKey(to=Gendar, on_delete=models.CASCADE)
    brandImage = models.ImageField(upload_to='photos', null=False, blank=False)
    smallText = models.CharField(default=' ', max_length=100)
    sizes = models.ManyToManyField('PerfumSize')  
    
    def __str__(self):
        return self.name


class PerfumSize(models.Model):  # Corrected model name to 'PerfumeSize'
    size = models.CharField(blank=False, null=False, max_length=20)
    minPrice = models.DecimalField(max_digits=5, decimal_places=1,default=0)
    high_size = models.DecimalField(max_digits=5, decimal_places=1,default=0)
    
    def __str__(self):
        return self.size
    

class MySetting(models.Model):
   phone = models.CharField(default='+96176596623', max_length=40,  blank=True, null=True)
   email = models.EmailField(max_length=254, null=True, blank=True)
   instagramLink = models.TextField(blank=True, null=True)
   facebookLink = models.TextField(blank=True, null=True)
   website_url = models.URLField(max_length=200, blank=True, null=True)
   address = models.CharField(max_length=255, blank=True, null=True)
   business_name = models.CharField(max_length=100, blank=True, null=True)
   logo = models.ImageField(upload_to='photos', blank=True, null=True)
   linkedinLink = models.URLField(max_length=200, blank=True, null=True)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
   description = models.TextField(blank=True, null=True)
   owner_name = models.CharField(max_length=100, blank=True, null=True)