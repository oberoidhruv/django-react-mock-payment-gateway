from rest_framework.generics import ListCreateAPIView
from notifications.models import Notification
from notifications.notificationSerializer import NotificationSerializer
from rest_framework import permissions


class NotificationListView(ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


# Create your views here.
