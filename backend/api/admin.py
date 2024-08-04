from django.contrib import admin
from .models import Student,HostelApplication,Form

# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name', 'email', 'aadhaar_no','category','subcategory','gender','branch','admission_based_on','round']
    list_display = ['first_name', 'last_name', 'email', 'aadhaar_no','category','subcategory','gender','branch','admission_based_on','round','date_applied']
    list_filter = ['branch','branch','category','subcategory','gender']  

@admin.register(HostelApplication)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']
    list_display = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']
    list_filter = ['branch', 'category', 'department', 'semester_year']     

@admin.register(Form)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['name', 'phone_number']
    list_display = ['name', 'phone_number']
    list_filter = ['name', 'phone_number']    
