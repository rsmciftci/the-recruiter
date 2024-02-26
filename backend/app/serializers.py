from rest_framework import serializers
from .models import Candidate

class CandidateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Candidate
        fields = (
            'username',
            'first_name',
            'surname',
            'password',
            'email',
            'date_of_birth',
            'phone',
            'city',
            'town',
            'postcode',
            'gender'
        )