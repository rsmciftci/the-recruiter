from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Candidate
from ..serializers.candidate_serializers import CandidateSerializer
from rest_framework import serializers, status
import hashlib


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


@api_view(['POST','GET'])
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
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['POST'])
def find_candidate(request):

    email = request.data.get("email")
    password = hashlib.md5(request.data.get("password").encode("utf-8")).hexdigest() 
    try:
        candidate = Candidate.objects.get(email=email, password=password)
        
    except Candidate.DoesNotExist:
        return Response(candidate,status=status.HTTP_404_NOT_FOUND)
    return Response(CandidateSerializer(candidate).data,status=status.HTTP_200_OK)
    
@api_view(['PUT','DELETE'])
def update_or_delete_candidate(request, id):    
    try:
        company = Candidate.objects.get(id=id)
    except Candidate.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "PUT":
        serializer = CandidateSerializer(company, data=request.data)        
        serializer.password_str_to_md5(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
