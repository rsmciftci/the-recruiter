from django.urls import path
from .views import views
from .views import company_view
urlpatterns = [
    path('hello-world/', views.hello_world  , name='hello_world'),
    path('', views.ApiOverview , name='home'),
    path('candidate/', views.add_candidate, name='add-candidate'),
    path('candidate/<int:id>', views.update_or_delete_candidate, name='update_or_delete_candidate'),
    
    path("company/", company_view.add_company ),
    path("company/<int:id>", company_view.update_or_delete_company, name="update_or_delete_company"),
]