from django.db import models

class Empresa(models.Model):
    """define los campos para la informacion de la empresa"""
    Nombre_de_la_empresa = models.CharField(max_length=50)
    Direccion = models.CharField(max_length=50)
    NIT = models.CharField(max_length=15)
    Telefono = models.CharField(max_length=15)
