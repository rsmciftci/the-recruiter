from rest_framework import serializers
from ..models import CVTEST

class CVTestSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CVTEST
        fields = "__all__"
        