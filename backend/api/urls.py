from django.urls import path
from . import views

urlpatterns = [
    path('pets/', views.PetListCreate.as_view(), name='pet-list'),
    path('pets/delete/<int:pk>', views.PetDelete.as_view(), name='delete-pet'),
]