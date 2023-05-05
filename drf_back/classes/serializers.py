from rest_framework import serializers
from .models import Class, Member, WaitingMember, ClassSettings
from main.models import Color
from accounts.models import User
from tests.serializers import TestsSerializer
from accounts.serializers import UserSerializer


# * serializer for view list of classes if user.role == TEACHER and create class
class CLassesListSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())
    color = serializers.CharField(source='color.value', read_only=True)

    class Meta:
        model = Class
        fields = ['id', 'name', 'description', 'color', 'creator']

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

# * serializer for view class in other serializers and CRUD operations
class CLassSerializer(serializers.ModelSerializer):

    tests = TestsSerializer(many=True)
    settings = ClassSettinsSerializer()
    color_id = serializers.PrimaryKeyRelatedField(queryset=Color.objects.all(), source='color', write_only=True)
    color = serializers.CharField(source='color.value', read_only=True)
    members = MemberSerializer(many=True)
    waiters = MemberSerializer(many=True)

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
        fields = ['id', 'name', 'description', 'color', 'type', 'subject', 'code', 'color_id', 'tests', 'members', 'waiters', 'settings']





