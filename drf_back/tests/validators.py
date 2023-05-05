

class ValidateQuestion:

    @classmethod
    def validate_text(cls, passed_question):
        return passed_question.passed_answers.all()[0].answer.value  == passed_question.question.correct_answers[0].value

    @classmethod
    def validate_many_to_one(cls, passed_question):
       return passed_question.passed_answers.all()[0].answer.id  == passed_question.question.correct_answers[0].id
            
    
    @classmethod
    def validate_many_to_many(cls, passed_question):
        passed_answers_ids = [instance.answer.id for instance in passed_question.passed_answers.all()]
        for correct_answer in passed_question.question.correct_answers:
            if not correct_answer.id in passed_answers_ids:
                return False
        return True

    @classmethod
    def get_validator(cls, type):
        validators = {
            1: cls.validate_text,
            2: cls.validate_many_to_one,
            3: cls.validate_many_to_many
        }
        return validators.get(type, lambda q: 'type is undefined')
   
    @classmethod
    def validate(cls, passed_question):
        validator = cls.get_validator(passed_question.question.type.id)
        return validator(passed_question)
