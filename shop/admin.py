from django.contrib import admin
from .models import Blog , Perfium, Gendar,PerfumSize,MySetting

admin.site.register(Blog)
# admin.site.register(Perfium)
admin.site.register(Gendar)
admin.site.register(PerfumSize)
admin.site.register(MySetting)



@admin.register(Perfium)
class PerfiumAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender') 
    list_filter = ['gender'] 

      
