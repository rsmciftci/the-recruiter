from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Candidate
from ..serializers.candidate_serializers import CandidateSerializer, CandidateSerializerAllFields
from rest_framework import serializers, status
import hashlib
import json


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


@api_view(["POST", "GET"])
def add_candidate(request):
    candidate = CandidateSerializer(data=request.data)
    candidate.password_str_to_md5(data=request.data)

    email = request.data.get("email")
    phone = request.data.get("phone")

    if Candidate.objects.filter(email=email).exists():
        raise serializers.ValidationError("Email already exists")

    if Candidate.objects.filter(phone=phone).exists():
        raise serializers.ValidationError("Phone already exists")

    if candidate.is_valid():
        candidate.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def find_candidate(request):
    email = request.data.get("email")
    password = hashlib.md5(request.data.get("password").encode("utf-8")).hexdigest()
    try:
        candidate = Candidate.objects.get(email=email, password=password)

    except Candidate.DoesNotExist:
        return Response(candidate, status=status.HTTP_404_NOT_FOUND)
    return Response(CandidateSerializerAllFields(candidate).data, status=status.HTTP_200_OK)


@api_view(["PUT", "DELETE"])
def update_or_delete_candidate(request, id):
    try:
        candidate = Candidate.objects.get(id=id)

    except Candidate.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = CandidateSerializer(candidate, data=request.data)
        serializer.password_str_to_md5(data=request.data)

        if request.data["password"] != candidate.password:
            return Response(
                {"message": "Password is incorrect!"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if serializer.is_valid():
            serializer.save()

            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        candidate.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
