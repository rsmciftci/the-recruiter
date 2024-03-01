from rest_framework.decorators import api_view
from django.http import HttpResponse
import os
from ..serializers.cvtest_serializers import CVTestSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(["POST"])
def add_cv(request):
          
        
        # form = CVTestSerializer(request.POST, request.FILES)

        # if form.is_valid():
        #     form.save()
        #     return Response(status=status.HTTP_201_CREATED)
        
        # 10 DAN 10 A CALISIYOR
        # print("test")
        # print(request.data)
        # print("test")
        # if request.method == 'POST' and request.FILES.get('cv'):
        #     uploaded_file = request.FILES['cv']
            
        #     # Check if the file has a PDF extension
        #     if not uploaded_file.name.endswith('.pdf'):
        #         return HttpResponse('Only PDF files are allowed.', status=400)
            
        #     destination_directory = 'path/to/destination/'
            
        #     # Create the destination directory if it doesn't exist
        #     os.makedirs(destination_directory, exist_ok=True)
            
        #     # Save the uploaded file to the destination directory
        #     destination_path = os.path.join(destination_directory, uploaded_file.name)
        #     with open(destination_path, 'wb+') as destination:
        #         for chunk in uploaded_file.chunks():
        #             destination.write(chunk)
            
        #     return HttpResponse('File uploaded successfully!')
        # else:
        #     return HttpResponse('No file uploaded.')
        # 10
        
        serializer = CVTestSerializer(data=request.data)
        if serializer.is_valid():
            # you can access the file like this from serializer
            # uploaded_file = serializer.validated_data["file"]
            
            #TODO: before save check file extension and throw exception if not required one
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        
        