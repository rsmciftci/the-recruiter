from rest_framework import serializers
from ..models import JobAdvert


class JobAdvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobAdvert
        fields = "__all__"


class JobAdvertSerializerWithoutCandidateAndRecruiter(serializers.ModelSerializer):
    class Meta:
        model = JobAdvert
        fields = [
            "id",
            "title",
            "publish_date",
            "definition",
            "salary",
            "city",
            "job_type",
            "company"
        ]
