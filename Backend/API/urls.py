from django.urls import path
from .views import APIviews

urlpatterns = [
    path('files', APIviews.as_view(), name='company_list'),
    path('files/<int:id>', APIviews.as_view(),name='company_id'),
]
