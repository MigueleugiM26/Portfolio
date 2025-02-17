from django.db import models

class Projetos(models.Model):
    nome=models.CharField(max_length=128)
    descricao=models.TextField()
    tipo=models.CharField(max_length=32)
    imagens = models.JSONField(default=list, blank=False)
    equipe = models.PositiveIntegerField(default=1)
    tecnologias=models.TextField()
    periodo=models.CharField(max_length=32)
    status=models.CharField(max_length=32)
    repo=models.CharField(max_length=64)
    figma=models.CharField(max_length=64)
    website=models.CharField(max_length=64)

    def __str__(self):
        return self.nome