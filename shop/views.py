from django.shortcuts import redirect, render,get_object_or_404
from .models import Perfium,Gendar,Blog, PerfumSize, MySetting
from django.views.decorators.cache import never_cache


# Create your views here.
def main(request):
    malePerfume = Perfium.objects.filter(gender__gender='Male') 
    femalePerfume = Perfium.objects.filter(gender__gender='Female') 
    unisexPerfume = Perfium.objects.filter(gender__gender='Unisex') 
    allProd = Perfium.objects.all() 
    allGender = Gendar.objects.all()
    blogs = Blog.objects.all()
    setting = MySetting.objects.last()

    return render(request,'index.html',{'male':malePerfume,
                                        'female':femalePerfume,
                                         'unisex': unisexPerfume,
                                         'all': allProd,
                                         'gen':allGender,
                                         'blog':blogs,
                                         'setting':setting})



@never_cache
def product(request, pk):
    perfume = get_object_or_404(Perfium, pk=pk)
    sameCategori = Perfium.objects.filter(gender=perfume.gender).exclude(pk=pk)

    allGender = Gendar.objects.all()
    malePerfume = Perfium.objects.filter(gender__gender='Male') 
    femalePerfume = Perfium.objects.filter(gender__gender='Female') 
    unisexPerfume = Perfium.objects.filter(gender__gender='Unisex') 
    perfumeSize = PerfumSize.objects.all()
    setting = MySetting.objects.last()

    return render(request, 'eashProduct.html', {'perfume': perfume, 
                                                'sameCategory': sameCategori,'gen':allGender,
                                                'male':malePerfume,
                                                'female':femalePerfume,
                                                'unisex': unisexPerfume,
                                                'size':perfumeSize,
                                                'setting':setting})


def search_view(request):
    query = request.GET.get('query', '').strip() 
    if query:
        try:
            perfume = Perfium.objects.get(name__iexact=query)
            
            return redirect('product', pk=perfume.id)
        except Perfium.DoesNotExist:
            
            return render(request, '404.html')
    return render(request, 'search_results.html', {'error': 'Please enter a search term.'})
                                                

def error_404(request, exception):
   context = {}
   return render(request,'404.html', context)

def error_500(request):
   context = {}
   return render(request,'admin/500.html', context)