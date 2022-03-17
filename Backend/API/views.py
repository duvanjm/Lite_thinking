import json
from django.views import View
from .models import Empresa
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


class APIviews(View):
    """methodos de la aplicacion"""

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, req, id=None):
        """obtiene todos los archivos"""
        if id:
            files = Empresa.objects.filter(id=id)
            if len(files) == 0:
                return JsonResponse({'error': 'No se encontraron compañias'})
            return JsonResponse(list(files.values()), safe=False)
        files = Empresa.objects.all()
        return JsonResponse(list(files.values()), safe=False)

    def post(self, req):
        """añadir nuevas empresas"""
        jd = json.loads(req.body)
        Empresa.objects.create(Nombre_de_la_empresa=jd['Nombre_de_la_empresa'],
                               Direccion=jd['Direccion'],
                               NIT=jd['NIT'],
                               Telefono=jd['Telefono'])
        return JsonResponse({'message': 'Creado exitosamente'})

    def put(self, req, id=None):
        """actualizar datos de la empresa"""
        jd = json.loads(req.body)
        if id:
            files = Empresa.objects.filter(id=id)
            if len(files) > 0:
                company = Empresa.objects.get(id=id)
                company.Nombre_de_la_empresa = jd['Nombre_de_la_empresa']
                company.Direccion = jd['Direccion']
                company.NIT = jd['NIT']
                company.Telefono = jd['Telefono']
                company.save()
                return JsonResponse({'message': 'Actualizado exitosamente'})
        return JsonResponse({'error': 'Falta id'})

    def delete(self, req, id=None):
        """eliminar empresa"""
        if id:
            files = Empresa.objects.filter(id=id)
            if len(files) > 0:
                Empresa.objects.filter(id=id).delete()
                return JsonResponse({'message': 'Eliminado exitosamente'})
        return JsonResponse({'error': 'Falta id'})
