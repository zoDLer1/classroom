from .models import TestStatus

class GetNextQuestionMixin:
    def get_next_passed_test_question(self, passed_test):
        passed_questions_ids = [
            passed_question.question.id for passed_question in passed_test.passed_questions.all()]
        questions = [
            question.id for question in passed_test.test.template.questions.all()]

        for question_id in questions:
            if question_id not in passed_questions_ids:
                return {'next_question': question_id, 'passing_test': passed_test.id, 'status': passed_test.status.id}

        if (not passed_test.status == 2):
            passed_test.status = TestStatus.objects.get(id=2)
            passed_test.save()

        return {'passing_test': passed_test.id, 'status': passed_test.status.id}