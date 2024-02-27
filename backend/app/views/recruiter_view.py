from rest_framework.decorators import api_view
from ..serializers.recruiter_serializer import RecruiterSerializer
from rest_framework.response import Response
from rest_framework import status
from ..models import Recruiter


@api_view(["POST"])
def add_recruiter(request):
    serializer = RecruiterSerializer(data=request.data)
    serializer.password_str_to_md5(data=request.data)
    
    # check phone & email
    
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["DELETE","PUT"])
def update_or_delete_recruiter(request,id):
    
    try:
        recruiter = Recruiter.objects.get(id=id)
    except Recruiter.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "DELETE":
        recruiter.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  
    
    elif request.method == "PUT":
        serializer = RecruiterSerializer(recruiter,data=request.data)  
        serializer.password_str_to_md5(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK) 
        return Response(status=status.HTTP_400_BAD_REQUEST)      
        