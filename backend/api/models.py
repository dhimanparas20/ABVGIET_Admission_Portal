from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.core.exceptions import ValidationError

def validate_image_size(image):
    max_size = 5 * 1024 * 1024  # 5 MB limit
    if image.size > max_size:
        raise ValidationError(f"Image size should not exceed {max_size / (1024 * 1024)} MB.")
    
BRANCH_CHOICES = [
    ('CSE', 'Computer Science and Engineering'),
    ('ECE', 'Electronics and Communication Engineering'),
    ('EE', 'Electrical Engineering'),
]

GENDER_CHOICES = [
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others'),
]

ADMISSION_CHOICES = [
    ('JEE', 'Joint Entrance Examination'),
    ('HPCET', 'Himachal Pradesh Common Entrance Test'),
    ('SeniorSecondary', 'Senior Secondary'),
    ('LEET', 'Lateral Entry'),
]

CATEGORY_CHOICES = [
        ('GENERAL', 'General'),
        ('SC', 'Scheduled Caste'),
        ('ST', 'Scheduled Tribe'),
        ('OBC', 'Other Backward Class'),
    ]    

ROUND_CHOICES = [
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
]

SUBCATEGORY_CHOICES = [
    ('Main_AIQ', ',All India Quota'),
    ('TFW', 'Tuition Fee Waiver'),
    ('BHA', 'Bhasha'),
    ('DEF', 'Defence'),
    ('BPL', 'Below Poverty Line'),
    ('IRDP', 'Integral rural Deveopment Prog'),
    ('BA', 'Backward Area'),
    ('PC/PH', 'Physically Handicapped'),
    ('SPT', 'Sports'),
    ('KM', 'Kashmiri Migrant'),
    ('FF', 'Freedom Fighter'),
    ('EWS', 'Economically Weaker Section')
]

DEPARTMENT_CHOICES = [
    ('btech', 'B.Tech'),
    ('iti', 'ITI'),
    ('polytech', 'Polytechnic'),
]

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    branch = models.CharField(max_length=5, choices=BRANCH_CHOICES)
    fathers_name = models.CharField(max_length=50)
    mothers_name = models.CharField(max_length=50)
    dob = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    admission_based_on = models.CharField(max_length=20, choices=ADMISSION_CHOICES)
    marks_scored = models.IntegerField()
    percentage_scored = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    subcategory = models.CharField(max_length=50, choices=SUBCATEGORY_CHOICES)
    matric_marks_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    twelfth_marks = models.DecimalField(max_digits=5, decimal_places=2)
    aadhaar_no = models.IntegerField(unique=True)
    bank_account_no = models.IntegerField(unique=True)
    bank_account_holder_name = models.CharField(max_length=100)
    bank_branch = models.CharField(max_length=100)
    bank_ifsc = models.CharField(max_length=20)
    permanent_address = models.TextField()
    father_phone_number = PhoneNumberField()
    mother_phone_number = PhoneNumberField()
    candidate_phone_number = PhoneNumberField(unique=True)
    round = models.IntegerField(choices=ROUND_CHOICES)
    want_hostel = models.BooleanField(default=False)
    date_applied = models.DateTimeField(auto_now=False, auto_now_add=True,null=True)

    student_passport_size_photo = models.ImageField(upload_to='media/student_data/student_photos/', max_length=200,validators=[validate_image_size], blank=True, null=True,)
    # New fields for storing images of certificates
    student_aadhaar_image = models.ImageField(upload_to='media/student_data/aadhaar_images/', max_length=200,validators=[validate_image_size], blank=True, null=True,)
    twelfth_certificate_image = models.ImageField(upload_to='media/student_data/12th_certificates/', max_length=200,validators=[validate_image_size], blank=True, null=True,)
    tenth_certificate_image = models.ImageField(upload_to='media/student_data/10th_certificates/', max_length=200,validators=[validate_image_size], blank=True, null=True,)
    bonafide_certificate = models.ImageField(upload_to='media/student_data/bonafide_certificates/', max_length=200, blank=True, null=True,validators=[validate_image_size])
    character_certificate = models.ImageField(upload_to='media/student_data/character_certificates/', max_length=200, blank=True, null=True,validators=[validate_image_size])
    migration_certificate = models.ImageField(upload_to='media/student_data/migration_certificates/', max_length=200, blank=True, null=True,validators=[validate_image_size])
    category_certificate = models.ImageField(upload_to='media/student_data/category_certificate/', max_length=200, blank=True, null=True,validators=[validate_image_size])

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class HostelApplication(models.Model):
    applicant_full_name = models.CharField(max_length=20)
    fathers_name = models.CharField(max_length=50)
    mothers_name = models.CharField(max_length=50)
    dob = models.DateField()
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    department = models.CharField(max_length=10, choices=DEPARTMENT_CHOICES)
    branch = models.CharField(max_length=5, choices=BRANCH_CHOICES)
    semester_year = models.IntegerField(choices=[(i, i) for i in range(1, 9)])
    rollno = models.IntegerField(unique=True)
    permanent_address = models.TextField()
    applicant_phone_number = PhoneNumberField()
    applicant_father_phone_number = models.CharField(max_length=15)
    applicant_mother_phone_number = models.CharField(max_length=15)
    father_total_annual_income = models.DecimalField(max_digits=10, decimal_places=2)
    father_occupation_name = models.CharField(max_length=100)
    date_applied = models.DateTimeField(auto_now=False, auto_now_add=True,null=True)

    bonafide_certificate = models.ImageField(upload_to='hostel_applications/bonafide_certificates/', max_length=200, blank=True, null=True)

    def __str__(self):
        return self.applicant_full_name
