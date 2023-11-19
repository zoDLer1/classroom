import TestsServise from "services/TestsService"
import { useInitialRequest } from "hooks/requests/useInitialRequest"
import { useParams } from "react-router-dom"
import TemplateCreationForm from "components/forms/TemplateCreationForm"
import { useState } from "react"
import { Formik, Form } from "formik"
import ContentCenter from "./containers/ContentCenter"
import { useNavigate } from "react-router-dom"


export default function PassedTestPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(null)

    useInitialRequest(
        id,
        TestsServise.getPassedTest,
        {
            200: (resp) => {
                const { name, description, ...test_info } = resp.data.test_info

                const test_data = { name, description, ...test_info, member: resp.data.member_info, _class: resp.data._class }
                const questions = []
                for (const passed_question of resp.data.passed_questions) {
                    const { is_correct, passed_answers, time } = passed_question
                    const { id, answers, ...question_info } = passed_question.question_info
                    for (let i = 0; i < answers.length; i++) {
                        const index = passed_answers.findIndex(passed_answer => passed_answer.answer === answers[i].id)
                        const isPassed = index !== -1 

                        answers[i] = { ...answers[i], isCorrect: isPassed || answers[i].isCorrect, right: answers[i].value ?? answers[i].isCorrect, isPassed, value: passed_answers[index]?.value }
                    }
                    const question = { ...question_info, answers, is_correct, passed_time: time }
                    questions.push(question)
                }
                test_data['questions'] = questions
                setData(test_data)
            },
            'bad': () => navigate(-1)
        }
    )

    return (
        <ContentCenter>
            {data && <Formik
            initialValues={data}>
                {(form) => <TemplateCreationForm {...form} initialViewMode={true} viewActions={false} />}
            </Formik>}
        </ContentCenter>
    )
}

