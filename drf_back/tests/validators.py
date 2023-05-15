from .types.question import MANY_TO_MANY, MANY_TO_ONE, TEXT_FIELD
from rest_framework import serializers

class AnswersNotFound(BaseException):
    pass




class ValidatePassedQuestion:

    @classmethod
    def is_valid_text_field(cls, passed_question):
        return cls.get_answers(passed_question)[0].answer.value == passed_question.question.correct_answers[0].value

    @classmethod
    def is_valid_many_to_one(cls, passed_question):
       return cls.get_answers(passed_question)[0].answer.id == passed_question.question.correct_answers[0].id
            
    @classmethod
    def is_valid_many_to_many(cls, passed_question):
        passed_answers_ids = [instance.answer.id for instance in cls.get_answers(passed_question)]
        for correct_answer in passed_question.question.correct_answers:
            if not correct_answer.id in passed_answers_ids:
                return False
        return True

    @classmethod
    def get_validator(cls, type):
        validators = {
            TEXT_FIELD: cls.is_valid_text_field,
            MANY_TO_ONE: cls.is_valid_many_to_one,
            MANY_TO_MANY: cls.is_valid_many_to_many
        }
        return validators.get(type, lambda q: 'type is undefined')
    
    @classmethod
    def get_answers(cls, passed_question):
        answers = passed_question.passed_answers.all()
        if answers[0].answer == None:
            raise AnswersNotFound
        return answers

    @classmethod
    def is_valid(cls, passed_question):
        try:
            validator = cls.get_validator(passed_question.question.type.id)
            is_correct = validator(passed_question)
            return is_correct
        except AnswersNotFound:
            return False
        except: 
            return False

 





class QuestionData:
    def  __init__(self, answers, corrected_answers, type):
        self.answers = answers
        self.count_corrected_answers = corrected_answers
        self.question_type = type


class ValidateQuestion:
    @classmethod
    def validate(cls, answers, corrected_answers, type):
        data = QuestionData(answers, corrected_answers, type)
        validator = cls.get_validator(type.id)
        validator(data)


    @classmethod
    def get_validator(cls, type):
        validators = {
            TEXT_FIELD: cls.validate_text_field,
            MANY_TO_ONE: cls.validate_many_to_one,
            MANY_TO_MANY: cls.validate_many_to_many
        }
        return validators.get(type, lambda d: None)

    @classmethod
    def validate_text_field(cls, data: QuestionData):
        cls.has_max_one_answer(data.answers)
        cls.has_only_one_correct_answer(data.count_corrected_answers, data.question_type.name)
        
    @classmethod
    def validate_many_to_one(cls, data: QuestionData):
        cls.has_min_two_answers(data.answers)
        cls.has_only_one_correct_answer(data.count_corrected_answers, data.question_type.name)
       
    @classmethod
    def validate_many_to_many(cls, data: QuestionData):
        cls.has_min_two_answers(data.answers)

    @classmethod
    def has_only_one_correct_answer(cls, count, type):
        if count > 1:
            raise serializers.ValidationError({'answers': f'У типа вопроса `{type}` может быть только 1 корректный ответ'})

    @classmethod
    def has_max_one_answer(cls, answers):
        if len(answers) > 1:
            raise serializers.ValidationError({'answers':'На данный вопрос должен быть только 1 ответ'})

    @classmethod
    def has_min_two_answers(cls, answers):
        if len(answers) < 2:
            raise serializers.ValidationError({'answers':'На данный вопрос должно быть минимум 2 ответа'})