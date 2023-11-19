from rest_framework import serializers
from ..models import Test, TestSettings
from drf_back.roles import TEACHER


class TestValidators:
    def validate__class(self, value):
        if not value.creator == self.context['request'].user:
            raise serializers.ValidationError(
                'Вы должны быть создателем класса')
        return value

    def validate_template(self, value):
        if not value.creator == self.context['request'].user:
            raise serializers.ValidationError(
                'Вы должны быть создателем шаблона')
        return value

class TestsSerializer(serializers.ModelSerializer, TestValidators):
    name = serializers.CharField(source='template.name', read_only=True)
    description = serializers.CharField(
        source='template.description', read_only=True)

    class Meta:
        model = Test
        fields = ['id', 'name', 'description', 'date']


    def to_representation(self, instance):
        fields = super().to_representation(instance)
        if not self.context['request'].user.role.id == TEACHER:
            passed = instance.passed_tests.filter(
                member__user=self.context['request'].user)
            if (passed.exists() and passed[0].status.id == 2):
                fields['passed_test'] = passed[0].id

        return fields

class TestSettingsSerializer(serializers.ModelSerializer):
    allow_view_answers_after_passing = serializers.BooleanField()

    class Meta:
        model = TestSettings
        fields = ['allow_view_answers_after_passing']

class TestSerializer(serializers.ModelSerializer):
    from .passed_test import PassedTestsSerializer
    from classes.serializers import CLassesListSerializer
    from .template import TemplatesSerializerList

    passed_tests = PassedTestsSerializer(many=True, read_only=True)
    _class = CLassesListSerializer(read_only=True)
    settings = TestSettingsSerializer()
    template_info = TemplatesSerializerList(read_only=True, source='template')

    class Meta:
        model = Test
        fields = ['id', '_class', 'date', 'passed_tests', 'template_info', 'settings', 'template']
        


    def update(self, instance, validated_data):
        print(validated_data)
        settings = validated_data.pop('settings', {})
        instance.settings.allow_view_answers_after_passing = settings.get('allow_view_answers_after_passing', instance.settings.allow_view_answers_after_passing)
        instance.settings.save()
        return instance

class TestsSerializer(serializers.ModelSerializer, TestValidators):
    from .template import TemplatesSerializerList

    template_info = TemplatesSerializerList(read_only=True, source='template')

    def create(self, validated_data):
        instance = super().create(validated_data)
        TestSettings.objects.create(test=instance)
        return instance 

    class Meta:
        model = Test
        fields = ['id', '_class', 'template',
                  'date', 'template_info']

        extra_kwargs = {
            'template': {'write_only': True},
            '_class': {'write_only': True},
        }

    def to_representation(self, instance):
        fields = super().to_representation(instance)
        passed_test = instance.passed_tests.filter(
            member__user__id=self.context['request'].user.id)
        if passed_test.exists():
            passed_test_instance = passed_test[0]
            status = passed_test_instance.status.id
            fields['passed_status'] = status
            if (status == 2):
                fields['passed_test'] = passed_test_instance.id
        else:
            fields['passed_status'] = 0

        return fields

class TestStatisticSerializer(serializers.ModelSerializer, TestValidators):
    from .template import QuestionStatisticSerializer
    
    questions = QuestionStatisticSerializer(many=True, source='template.questions')

    class Meta:
        model = Test
        fields = ['questions']
