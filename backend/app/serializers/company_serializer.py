from rest_framework import serializers
from ..models import Company

class CompanySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Company
        fields = "__all__"
        
class CompanySerializerOnlyName(serializers.ModelSerializer):
    
    class Meta:
        model = Company
        fields = ["name"]