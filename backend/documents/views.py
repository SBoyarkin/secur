from xml.dom.minidom import Document

from django.shortcuts import render
from rest_framework import viewsets

from .models import DocumetsUsers, Documents
from .serializers import DocumentSerializer, DocumetsUsersSerializer


# Create your views here.

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Documents.objects.all()
    serializer_class = DocumentSerializer



class DocumetsUsers(viewsets.ModelViewSet):
    queryset = DocumetsUsers.objects.all()
    serializer_class = DocumetsUsersSerializer