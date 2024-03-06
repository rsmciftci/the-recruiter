from rest_framework import serializers
from ..models import JobAdvert


class JobAdvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobAdvert
        fields = "__all__"
        
class JobAdvertSerializerDepth1(serializers.ModelSerializer):
    class Meta:
        model = JobAdvert
        fields = fields = [
            "id",
            "title",
            "publish_date",
            "definition",
            "salary",
            "city",
            "job_type",
            "candidate"
        ]
        depth = 1


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
