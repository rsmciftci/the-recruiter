from rest_framework import serializers
from ..models import Candidate
import hashlib


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = (
            "first_name",
            "surname",
            "password",
            "email",
            "phone",
            "city",
            "town",
            "postcode",
            "current_position",
            "gender",
        )

    def password_str_to_md5(self, data):
        str_password = data["password"]
        md5_password = hashlib.md5(str_password.encode("utf-8")).hexdigest()
        data["password"] = md5_password
        return data


class CandidateSerializerAllFields(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = "__all__"


class CandidateSerializerCV(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ["cv"]


class CandidateSerializerPhoto(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ["photo"]


class CandidateSerializerForSearchResult(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = (
            "first_name",
            "surname",
            "email",
            "phone",
            "city",
            "town",
            "current_position",
            "cv",
        )
