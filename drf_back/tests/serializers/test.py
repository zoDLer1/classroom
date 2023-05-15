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
            fields['is_test_passed'] = instance.passed_tests.filter(member__user=self.context['request'].user).exists()
        return fields

    def create(self, validated_data):
        instance = super().create(validated_data)
        TestSettings.objects.create(test=instance)
        return instance


class TestSerializer(serializers.ModelSerializer, TestValidators):
    from .template import TemplatesSerializer
    from .passed_test import PassedTestsSerializer

    template = TemplatesSerializer(read_only=True)
    passed_tests = PassedTestsSerializer(many=True)

    class Meta:
        model = Test
        fields = ['id', 'template', 'passed_tests', 'date']



    def to_representation(self, instance):
        fields = super(TestSerializer, self).to_representation(instance)
        if not self.context['request'].user.role.id == TEACHER:
            fields.pop('passed_tests')
        else:
            fields.pop('template')
     
        return fields

