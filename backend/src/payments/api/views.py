#from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from payments.models import Payment
from .serializer import PaymentSerializer
#from django.http import JsonResponse
#from django.shortcuts import render
#from rest_framework.response import Response
#from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import viewsets
from django.shortcuts import render
#from django.views.decorators.csrf import csrf_exempt, csrf_protect


class PaymentViewSet(viewsets.ModelViewSet):

    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()
    permission_classes = (permissions.AllowAny, )
