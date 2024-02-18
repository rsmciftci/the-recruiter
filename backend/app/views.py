from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Candidate
from .serializers import CandidateSerializer
from rest_framework import serializers, status


@api_view(["GET"])
def hello_world(request):
    return Response({"message": "Hello World!"})

# TODO: update ApiOverview
@api_view(["GET"])
def ApiOverview(request):
    api_urls = {
        "all_candidates": "/",
        "Add": "/create",
        "Update": "/update",
        "Delete": "/delete",
    }
    
    return Response(api_urls)


@api_view(['POST'])
def add_candidate(request):
    candidate = CandidateSerializer(data=request.data)
    
    email = request.data.get('email')
    phone = request.data.get('phone')
    
    if Candidate.objects.filter(email=email).exists():
        raise serializers.ValidationError('Email already exists')
    
    if Candidate.objects.filter(phone=phone).exists():
        raise serializers.ValidationError('Phone already exists')

    if candidate.is_valid():
        candidate.save()
        return Response(candidate.data)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)