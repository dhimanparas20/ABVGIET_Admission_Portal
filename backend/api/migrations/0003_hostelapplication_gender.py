# Generated by Django 5.0.7 on 2024-08-04 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_form'),
    ]

    operations = [
        migrations.AddField(
            model_name='hostelapplication',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Others', 'Others')], default='Female', max_length=10),
        ),
    ]
