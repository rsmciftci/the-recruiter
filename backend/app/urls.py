from django.urls import path
from .views import company_view, recruiter_view, jobadvert_view, candidate_views
urlpatterns = [
    path('hello-world/', candidate_views.hello_world  , name='hello_world'),
    path('', candidate_views.ApiOverview , name='home'),
    path('candidate/', candidate_views.add_or_find_candidate, name='add_or_find_candidate'),
    path('candidate/<int:id>', candidate_views.update_or_delete_candidate, name='update_or_delete_candidate'),
    
    path("company/", company_view.add_company ),
    path("company/<int:id>", company_view.update_or_delete_company, name="update_or_delete_company"),
    
    path('recruiter/', recruiter_view.add_recruiter),
    path('recruiter/<int:id>', recruiter_view.update_or_delete_recruiter),
    
    path('jobadvert/', jobadvert_view.add_jobadvert),
    path('jobadvert/<int:id>', jobadvert_view.update_or_delete_jobadvert),
    
]