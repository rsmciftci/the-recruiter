from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world  , name='hello_world'),
    path('', views.ApiOverview , name='home'),
    path('create-candidate/', views.add_candidate, name='add-candidate'),
]