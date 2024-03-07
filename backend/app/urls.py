from django.urls import path
from .views import (
    company_view,
    recruiter_view,
    jobadvert_view,
    candidate_views,
    cvtest_views,
)

urlpatterns = [
    path("hello-world/", candidate_views.hello_world, name="hello_world"),
    path("", candidate_views.ApiOverview, name="home"),
    path("candidate/", candidate_views.add_candidate, name="add_candidate"),
    path("find-candidate/", candidate_views.find_candidate, name="find_candidate"),
    path(
        "candidate/<int:id>",
        candidate_views.update_or_delete_candidate,
        name="update_or_delete_candidate",
    ),
    path("candidates-by-current-position/<str:position>", candidate_views.find_candidate_by_current_position),
    path("candidate-photo/<int:id>", candidate_views.add_photo, name="add_photo"),
    path("candidate-cv/<int:id>", candidate_views.add_cv, name="add_cv"),
    
    
    path("company/", company_view.add_company),
     path("all-companies/", company_view.get_all_companies),
    path(
        "company/<int:id>",
        company_view.update_or_delete_company,
        name="update_or_delete_company",
    ),
    path("recruiter/", recruiter_view.add_recruiter),
    path("recruiter/<int:id>", recruiter_view.update_or_delete_recruiter),
    path("find-recruiter/", recruiter_view.find_recruiter, name="find-recruiter"),
    
    
    path("jobadvert/", jobadvert_view.add_jobadvert),
    path("jobadvert/<int:id>", jobadvert_view.update_or_delete_jobadvert),
    path(
        "jobadvert-by-candidateid/<int:candidate_id>",
        jobadvert_view.find_jobs_applied_by_candidate,
    ),
     path(
        "jobadvert-by-recruiterid/<int:recruiterid>",
        jobadvert_view.find_jobs_by_recruiter,
    ),
    path("jobadvert-by-title/<str:title>", jobadvert_view.find_jobs_applied_by_title),
    path("jobadvert-by-id/<int:id>", jobadvert_view.find_job_by_id),
    path(
        "jobadvert-apply/<int:job_id>/<int:candidate_id>",
        jobadvert_view.update_job_for_adding_candidate,
    ),
    path("jobadvert-delete", jobadvert_view.update_job_for_delete_candidate),
    
    

]
