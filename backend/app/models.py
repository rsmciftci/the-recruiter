from django.db import models
from enum import Enum


class GenderEnum(Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"


class Candidate(models.Model):
    first_name = models.CharField(max_length=30, null=False, blank=False)
    surname = models.CharField(max_length=30, null=False, blank=False)
    password = models.CharField(null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)
    date_of_birth = models.DateField(null=False, blank=False)
    phone = models.CharField(max_length=15, null=False, blank=False, unique=True)
    city = models.CharField(max_length=30, null=False, blank=False)
    town = models.CharField(max_length=30, null=False, blank=False)
    postcode = models.CharField(max_length=30, null=False, blank=False)
    # TODO: GenderEnum needs to be serialized, find best method to do
    # gender = models.CharField(
    #     choices=[(tag, tag.value) for tag in GenderEnum], null=False, blank=False
    # )
    gender = models.CharField(max_length=30, null=False, blank=False)    


class JobTypeEnum(Enum):
    Hybrid = "Hybrid"
    Remote = "Remote"
    OnSite = "On-Site"


class Company(models.Model):
    
    name = models.CharField(max_length=50, null=False, blank=False)
    city = models.CharField(max_length=30, null=False, blank=False)
    town = models.CharField(max_length=30, null=False, blank=False)
    phone = models.CharField(max_length=15, null=False, blank=False, unique=True)
    postcode = models.CharField(max_length=30, null=False, blank=False)


class Recruiter(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    first_name = models.CharField(max_length=30, null=False, blank=False)
    surname = models.CharField(max_length=30, null=False, blank=False)
    phone = models.CharField(max_length=15, null=False, blank=False, unique=True)
    email = models.EmailField(unique=True, null=False, blank=False)
    password = models.CharField(null=False, blank=False)
    gender = models.CharField(
        max_length=6,
        choices=[(tag, tag.value) for tag in GenderEnum],
        null=False,
        blank=False,
    )


class JobAdvert(models.Model):
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)

    title = models.CharField(max_length=100, null=False, blank=False)
    publish_date = models.DateField(null=False, blank=False)
    definition = models.TextField(null=False, blank=False)
    salary = models.CharField(max_length=50, null=False, blank=False)
    city = models.CharField(max_length=30, null=False, blank=False)
    job_type = models.CharField(
        choices=[(tag, tag.value) for tag in JobTypeEnum], null=False, blank=False
    )