from rest_framework import status
from django.test import TestCase, Client
from ..models import Candidate
from ..serializers.candidate_serializers import CandidateSerializer
import hashlib
from rest_framework import status
import json
from django.urls import reverse
from rest_framework import serializers

client = Client()

class CandidateTest(TestCase):
    def setUp(self):
        self.candidate = {
            "first_name": "RASIM",
            "surname": "CHIFTCHI",
            "password": hashlib.md5("123456".encode("utf-8")).hexdigest(),
            "email": "info@rasko.com",
            "date_of_birth": "1993-05-06",
            "phone": "5695422211189",
            "city": "London",
            "town": "Stratford",
            "postcode": "E15 1UB",
            "gender": "MALE",
            "username": "usernameTEST",
        }
        
        self.invalid_candidate = {
            "first_name": "RASIM",
            "surname": "CHIFTCHI",
            "password": "",
            "email": "",
            "date_of_birth": "",
            "phone": "",
            "city": "London",
            "town": "Stratford",
            "postcode": "E15 1UB",
            "gender": "MALE",
            "username": "",
        }
        
        self.username_exists = {
            "first_name": "RASIM",
            "surname": "CHIFTCHI",
            "password": hashlib.md5("123456".encode("utf-8")).hexdigest(),
            "email": "unique@rasko.com",
            "date_of_birth": "1993-05-06",
            "phone": "2345324523",
            "city": "London",
            "town": "Stratford",
            "postcode": "E15 1UB",
            "gender": "MALE",
            "username": "usernameTEST",
        }
        
        self.email_exists = {
            "first_name": "RASIM",
            "surname": "CHIFTCHI",
            "password": hashlib.md5("123456".encode("utf-8")).hexdigest(),
            "email": "info@rasko.com",
            "date_of_birth": "1993-05-06",
            "phone": "0000000",
            "city": "London",
            "town": "Stratford",
            "postcode": "E15 1UB",
            "gender": "MALE",
            "username": "uniqueUsername",
        }
        
        self.phone_exists = {
            "first_name": "RASIM",
            "surname": "CHIFTCHI",
            "password": hashlib.md5("123456".encode("utf-8")).hexdigest(),
            "email": "unique@rasko.com",
            "date_of_birth": "1993-05-06",
            "phone": "5695422211189",
            "city": "London",
            "town": "Stratford",
            "postcode": "E15 1UB",
            "gender": "MALE",
            "username": "unique",
        }
        

    def test_add_candidate(self):
        response = client.post(
            reverse('add-candidate'),
            data=json.dumps(self.candidate),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
    def test_create_invalid_candidate(self):
        response = client.post(
            reverse('add-candidate'),
            data=json.dumps(self.invalid_candidate),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
    def test_create_candidate_username_exists(self):
        client.post(
            reverse('add-candidate'),
            data=json.dumps(self.candidate),
            content_type='application/json'
        )
        response = client.post(
            reverse('add-candidate'),
            data=json.dumps(self.username_exists),
            content_type='application/json'
        )
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
    def test_create_candidate_email_exists(self):
        client.post(
            reverse('add-candidate'),
            data=json.dumps(self.candidate),
            content_type='application/json'
        )
        response = client.post(
            reverse('add-candidate'),
            data=json.dumps(self.email_exists),
            content_type='application/json'
        )
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
    def test_create_candidate_phone_exists(self):
        client.post(
            reverse('add-candidate'),
            data=json.dumps(self.candidate),
            content_type='application/json'
        )
        response = client.post(
            reverse('add-candidate'),
            data=json.dumps(self.phone_exists),
            content_type='application/json'
        )
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
