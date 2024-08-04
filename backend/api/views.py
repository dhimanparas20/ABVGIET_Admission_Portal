# views.py
from rest_framework import viewsets, permissions
from .models import Student,HostelApplication,Form
from .serializers import StudentSerializer,HostelApplicationSerializer,FormSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.AllowAny]  # Set appropriate permissions
    http_method_names = ['post']  # Only allow POST

    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['branch', 'category', 'subcategory', 'round']
    ordering_fields = ['first_name', 'last_name', 'percentage_scored']
    search_fields = ['first_name', 'last_name', 'email', 'aadhaar_no']

class HostelApplicationViewSet(viewsets.ModelViewSet):
    queryset = HostelApplication.objects.all()
    serializer_class = HostelApplicationSerializer
    permission_classes = [permissions.AllowAny]  # Set appropriate permissions
    http_method_names = ['post']  # Only allow POST

    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['branch', 'category', 'department', 'semester_year']
    ordering_fields = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']
    search_fields = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']

class FormViewSet(viewsets.ModelViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer
    permission_classes = [permissions.AllowAny]  # Set appropriate permissions
    http_method_names = ['post']  # Only allow POST

    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['name', 'phone_number']
    ordering_fields = ['name', 'phone_number']
    search_fields = ['name', 'phone_number']   
