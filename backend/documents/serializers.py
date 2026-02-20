from xml.dom.minidom import Document

from rest_framework import serializers

from documents.models import DocumetsUsers, Documents


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents
        fields = '__all__'


class DocumetsUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumetsUsers
        fields = '__all__'