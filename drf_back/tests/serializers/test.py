from rest_framework import serializers
from ..models import Test, TestSettings
from drf_back.roles import TEACHER


# ! REFACTOR


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
        fields = ['id', '_class', 'template', 'name', 'description', 'date']

        extra_kwargs = {
            'template': {'write_only': True},
            '_class': {'write_only': True},
        }


    def to_representation(self, instance):
        fields = super().to_representation(instance)
        if not self.context['request'].user.role.id == TEACHER:
            passed = instance.passed_tests.filter(member__user=self.context['request'].user)
            if (passed.exists()):
                fields['passed_test'] = passed[0].id
            
            
        return fields

    def create(self, validated_data):
        instance = super().create(validated_data)
        TestSettings.objects.create(test=instance)
        return instance


class TestSerializer(serializers.ModelSerializer, TestValidators):
    from .template import TemplatesSerializer, TemplatesSerializerList
    from .passed_test import PassedTestsSerializer
    from classes.serializers import CLassesListSerializer

    template = TemplatesSerializer(read_only=True)
    template_info = TemplatesSerializerList(read_only=True, source='template')
    passed_tests = PassedTestsSerializer(many=True)
    _class = CLassesListSerializer()


    class Meta:
        model = Test
        fields = ['id', 'template', 'passed_tests', 'date', '_class', 'template_info']


    def to_representation(self, instance):
        fields = super(TestSerializer, self).to_representation(instance)
        if not self.context['request'].user.role.id == TEACHER:
            fields.pop('passed_tests')
            fields.pop('_class')
            fields.pop('template_info')
        else:
            fields.pop('template')
     
        return fields



class TestStatisticSerializer(serializers.ModelSerializer, TestValidators):
    from .template import TemplateStatisticSerializer

    template = TemplateStatisticSerializer()



    class Meta:
        model = Test
        fields = ['id', 'template']


    