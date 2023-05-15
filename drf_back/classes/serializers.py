from rest_framework import serializers
from .models import Class, Member, WaitingMember, ClassSettings, Subject, ClassType
from main.models import Color
from accounts.serializers import UserSerializer
from rest_framework.views import exception_handler

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class ClassTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassType
        fields = '__all__'


# * serializer for view list of classes if user.role == TEACHER and create class
class CLassesListSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    color_info = ColorSerializer(source='color', read_only=True)
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = Class
        fields = ['id', 'name', 'description', 'creator', 'subject', 'subject_name', 'color_info']
        extra_kwargs = {
            'subject': {'required': True},
        }

    def create(self, validated_data):
        instance = super().create(validated_data)
        ClassSettings.objects.create(_class=instance)
        return instance
    


# * serializer for list classes if user.role == STUDENT


class MembersListSerializer(serializers.ModelSerializer):
    _class = CLassesListSerializer(read_only=True)

    class Meta:
        model = Member
        fields = ['_class']

# * serializer for view member in other serializers and CRUD operations


class MemberSerializer(serializers.ModelSerializer):
    info = UserSerializer(read_only=True, source='user')

    class Meta:
        model = Member
        fields = ['id', 'user', 'info', '_class']
        extra_kwargs = {
            'user': {'write_only': True},
            '_class': {'write_only': True},
        }

# * serializer for list waiters and CRUD operations


class WaitingMemberSerializer(serializers.ModelSerializer):
    info = UserSerializer(read_only=True, source='user')

    class Meta:
        model = WaitingMember
        fields = ['id', 'user', 'info', '_class']
        extra_kwargs = {
            'user': {'write_only': True},
            '_class': {'write_only': True},
        }

# * serializer for view settings in other serializers


class ClassSettinsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassSettings
        fields = ['allow_view_members_list']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'
        



# * serializer for view class in other serializers and CRUD operations


class CLassSerializer(serializers.ModelSerializer):
    from tests.serializers import TestsSerializer
    from accounts.serializers import UserSerializer

    creator = UserSerializer(read_only=True)
    tests = TestsSerializer(many=True, read_only=True)
    settings = ClassSettinsSerializer(read_only=True)
    color_info = ColorSerializer(source='color', read_only=True)
    members = MemberSerializer(many=True, read_only=True)
    waiters = MemberSerializer(many=True, read_only=True)
    subject_info = SubjectSerializer(source='subject', read_only=True)

    def to_representation(self, instance):
        fields = super(CLassSerializer, self).to_representation(instance)
        is_creator = instance.creator.id == self.context['request'].user.id
        if not (instance.settings.allow_view_members_list or is_creator):
            fields.pop('members')
        if not is_creator:
            fields.pop('settings')
            fields.pop('waiters')
        return fields

    class Meta:
        model = Class
        fields = ['id', 'name', 'description', 'color', 'type', 'subject',
                  'code', 'color_info', 'tests', 'members', 'waiters', 'settings', 'subject_info', 'creator']
        extra_kwargs = {
            'color': {'write_only': True},
            'subject':  {'write_only': True},
        }
        



    