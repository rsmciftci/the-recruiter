from rest_framework import serializers
from ..models import JobAdvert


class JobAdvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobAdvert
        fields = "__all__"
