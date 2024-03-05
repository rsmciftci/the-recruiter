from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.company_serializer import CompanySerializer, CompanySerializerOnlyName
from rest_framework import status
from ..models import Company


@api_view(["POST"])
def add_company(request):
    company = CompanySerializer(data=request.data)

    queryset = Company.objects.filter(phone=request.data.get("phone"))
    if queryset.exists():
        return Response(
            {"error": "Company already exists"}, status=status.HTTP_400_BAD_REQUEST
        )

    if company.is_valid():
        company.save()
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


# @api_view(["DELETE"])
# def delete_company(request, id):
#     try:
#         company = Company.objects.get(id=id)
#     except Company.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     company.delete()
#     return Response(
#         {"message": "Company has been deleted succesfully."},
#         status=status.HTTP_204_NO_CONTENT,
#     )


@api_view(["PUT","DELETE"])
def update_or_delete_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = CompanySerializer(company, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        company.delete()
        return Response(
            {"message": "Company has been deleted succesfully."},
            status=status.HTTP_204_NO_CONTENT,
        )
        
@api_view(["GET"])
def get_all_companies(request):
  
    if(request.method == "GET"):
        companies = Company.objects.all()   
        serializer = CompanySerializerOnlyName(companies, many=True)        
        return Response(serializer.data,status=status.HTTP_200_OK)
    
  
