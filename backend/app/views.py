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
    candidate.password_str_to_md5(data=request.data)
    
    username = request.data.get('username')
    email = request.data.get('email')
    phone = request.data.get('phone')

    
    
    if Candidate.objects.filter(username=username).exists():
        raise serializers.ValidationError('Username already exists')
    
    if Candidate.objects.filter(email=email).exists():
        raise serializers.ValidationError('Email already exists')
    
    if Candidate.objects.filter(phone=phone).exists():
        raise serializers.ValidationError('Phone already exists')

    if candidate.is_valid():
        
        candidate.save()
        return Response(candidate.data)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
def update_candidate(request, id):
    
    try:
        Candidate.objects.get(id=id)
    except Candidate.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    candidate = CandidateSerializer(data=request.data)
    
    if candidate.is_valid():
        candidate.update()
        return Response(status=status.HTTP_200_OK)
    return Response(candidate.errors, status=status.HTTP_400_BAD_REQUEST)
    
    