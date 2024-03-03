from rest_framework.decorators import api_view
from ..serializers.jobadvert_serializer import JobAdvertSerializer
from ..serializers.jobadvert_serializer import JobAdvertSerializerWithoutCandidateAndRecruiter
from rest_framework.response import Response
from rest_framework import status
from ..models import JobAdvert
from ..models import Candidate


@api_view(["POST"])
def add_jobadvert(request):
    serializer = JobAdvertSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def find_jobs_applied_by_candidate(request, candidate_id):
    
    candidate = Candidate.objects.get(id=candidate_id)
    job_adverts = candidate.jobadvert_set.all().order_by('-publish_date')
    
    serializer = JobAdvertSerializerWithoutCandidateAndRecruiter(job_adverts, many=True)
    serialized_data = serializer.data
    
    return Response(serialized_data,status=status.HTTP_200_OK)

@api_view(["GET"])
def find_jobs_applied_by_title(request, title):
    
    job_adverts = JobAdvert.objects.filter(title__icontains=title)
    serializer = JobAdvertSerializerWithoutCandidateAndRecruiter(job_adverts, many=True)
    
    return Response(serializer.data,status=status.HTTP_302_FOUND)
    
   

@api_view(["DELETE", "PUT"])
def update_or_delete_jobadvert(request, id):
    try:
        jobadvert = JobAdvert.objects.get(id=id)
    except JobAdvert.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "DELETE":
        jobadvert.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == "PUT":
        serializer = JobAdvertSerializer(jobadvert, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
