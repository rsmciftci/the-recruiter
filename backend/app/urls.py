from django.urls import path
from .views import views
from .views import company_view
urlpatterns = [
    path('hello-world/', views.hello_world  , name='hello_world'),
    path('', views.ApiOverview , name='home'),
    path('candidate/', views.add_candidate, name='add-candidate'),
    path('candidateupdate/<int:id>', views.update_candidate, name='update_candidate'),
    
    path("company/", company_view.add_company ),
    path("company-delete/<int:id>", company_view.delete_company, name="delete-company"),
]