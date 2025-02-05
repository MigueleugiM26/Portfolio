from . import views
from django.urls import path, re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('home', views.home, name='home')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
