from rest_framework.decorators import api_view
from ..serializers.jobadvert_serializer import JobAdvertSerializer
from rest_framework.response import Response
from rest_framework import status
from ..models import JobAdvert


@api_view(["POST"])
def add_jobadvert(request):
    serializer = JobAdvertSerializer(data=request.data)
    print("========================")
    print(serializer)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["DELETE","PUT"])
def update_or_delete_jobadvert(request,id):
    
    try:
        jobadvert = JobAdvert.objects.get(id=id)
    except JobAdvert.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "DELETE":
        jobadvert.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  
    
    elif request.method == "PUT":
        serializer = JobAdvertSerializer(jobadvert,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK) 
        return Response(status=status.HTTP_400_BAD_REQUEST)      
        