from django.urls import path
from django.shortcuts import render
from . import views

urlpatterns = [
path('',views.main,name='shop'),
path('product/<int:pk>',views.product, name="product"),
 path('search/', views.search_view, name='search'), 
]