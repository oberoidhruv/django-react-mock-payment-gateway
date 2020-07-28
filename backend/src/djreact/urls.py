from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api', include('payments.api.urls')),
    path('api/', include('payments.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('payments', include('payments.urls')),
    path('notifications', include('notifications.urls')),
    path('api/token', obtain_auth_token, name='obtain_token')
]
