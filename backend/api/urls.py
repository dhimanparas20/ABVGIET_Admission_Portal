from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"user", views.StudentViewSet,basename="user")
router.register(r"hostel", views.HostelApplicationViewSet,basename="hostel")

urlpatterns = [
    path('',include(router.urls)),   # for above routers
]