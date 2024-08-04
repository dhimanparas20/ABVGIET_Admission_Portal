from django.contrib import admin
from django.urls import path,include
from rest_framework import permissions
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

admin.site.site_header = "ABVGIET Admin Pannel"
admin.site.site_title = "ABVGIET Admin Portal"
admin.site.index_title = "ABVGIET Admission Cell"

#Swagger-API
schema_view = get_schema_view(
    openapi.Info(
        title="ABVGIET Admission Cell",
        default_version='v1',
        description="API description",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]