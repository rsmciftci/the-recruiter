from rest_framework import serializers
from .models import Candidate
import hashlib

class CandidateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Candidate
        fields = "__all__"
        
    def password_str_to_md5(self, data):
        str_password = data["password"] 
        md5_password = hashlib.md5(str_password.encode("utf-8")).hexdigest() 
        data["password"] = md5_password
        return data