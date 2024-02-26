from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.company_serializer import CompanySerializer
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


@api_view(["DELETE"])
def delete_company(self, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    company.delete()
    return Response(
        {"error": "Company has been deleted succesfully."},
        status=status.HTTP_204_NO_CONTENT,
    )
    
