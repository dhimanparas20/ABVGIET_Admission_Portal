# serializers.py
from rest_framework import serializers
from .models import Student,HostelApplication

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class HostelApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostelApplication
        fields = '__all__'        