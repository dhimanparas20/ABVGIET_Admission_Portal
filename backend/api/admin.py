from django.contrib import admin
from .models import Student,HostelApplication,Form
from import_export.admin import ImportExportModelAdmin,ExportMixin
from import_export import resources
from django.contrib import admin 

@admin.register(Student)
class StudentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ['first_name', 'last_name', 'email', 'aadhaar_no', 'category', 'subcategory', 'gender', 'branch', 'admission_based_on', 'round']
    list_display = ['first_name', 'last_name', 'email', 'aadhaar_no', 'category', 'subcategory', 'gender', 'branch', 'admission_based_on', 'round', 'date_applied']

@admin.register(HostelApplication)
class  HOstelAppAdmin(ImportExportModelAdmin,admin.ModelAdmin):
    search_fields = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']
    list_display = ['applicant_full_name', 'branch', 'category', 'department', 'semester_year']
    list_filter = ['branch', 'category', 'department', 'semester_year']     

@admin.register(Form)
class FormAdmin(ImportExportModelAdmin,admin.ModelAdmin):
    search_fields = ['name', 'phone_number']
    list_display = ['name', 'phone_number']
    list_filter = ['name', 'phone_number']    
