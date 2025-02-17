from django.shortcuts import render
from .models import Projetos


def home(request):
    return render (request, 'home.html')


def projetos(request):
    projetos = Projetos.objects.all().order_by('id')  
    
    context = {
        'projetos': projetos,
    }

    return render (request, 'projetos.html', context)


def galeria(request):
    projetos = Projetos.objects.all().order_by('id')  
    
    context = {
        'projetos': projetos,
    }

    return render (request, 'galeria.html', context)