from django.shortcuts import render


def home(request):
    return render (request, 'home.html')


def projetos(request):
    return render (request, 'projetos.html')


def galeria(request):
    return render (request, 'galeria.html')