from django.shortcuts import render,get_object_or_404
from .models import Perfium,Gendar



# Create your views here.
def main(request):
    malePerfume = Perfium.objects.filter(gender__gender='Male') 
    femalePerfume = Perfium.objects.filter(gender__gender='Female') 
    unisexPerfume = Perfium.objects.filter(gender__gender='Unisex') 
    allProd = Perfium.objects.all() 
    allGender = Gendar.objects.all()
    
    return render(request,'index.html',{'male':malePerfume,
                                        'female':femalePerfume,
                                         'unisex': unisexPerfume,
                                         'all': allProd,
                                         'gen':allGender})


from django.views.decorators.cache import never_cache

@never_cache
def product(request, pk):
    perfume = get_object_or_404(Perfium, pk=pk)
    print(f"Current perfume: {perfume.name}, ID: {perfume.id}")  # Debugging
    sameCategori = Perfium.objects.filter(gender=perfume.gender).exclude(pk=pk)
    allGender = Gendar.objects.all()
    malePerfume = Perfium.objects.filter(gender__gender='Male') 
    femalePerfume = Perfium.objects.filter(gender__gender='Female') 
    unisexPerfume = Perfium.objects.filter(gender__gender='Unisex') 

    return render(request, 'eashProduct.html', {'perfume': perfume, 
                                                'sameCategory': sameCategori,'gen':allGender,
                                                'male':malePerfume,
                                                'female':femalePerfume,
                                                'unisex': unisexPerfume,})
                                                