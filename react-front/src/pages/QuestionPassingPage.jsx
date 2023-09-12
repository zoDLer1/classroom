import pagesCss from './pages.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import TestsServise from 'services/TestsService'
import { Formik, Form } from 'formik'
import questionCss from 'components/lists/items/css/question.module.css'
import FormInput from 'components/forms/inputs/FormInput'
import TextAnswerList from 'components/lists/TextAnswer'
import FewFromListAnswer from 'components/lists/FewFromListAnswer'
import OneFromListAnswer from 'components/lists/OneFromListAnswer'
import FormLoader from 'components/forms/FormLoader'
import Button from 'components/UI/inputs/Button'
import useRequest from 'hooks/requests/useRequest'
import { useEffect } from 'react'

export default function QuestionPassingPage() {

    const params = useParams()
    const navigate = useNavigate()

    const [passQuestion, waitForResponse] = useRequest(async (data) => await TestsServise.passQuestion(params, data),
        {
            200: (response) => {
                const { passing_test, next_question, status } = response.data
                if (status === 2){
                    navigate(`/tests/passed/${passing_test}/`)
                }
                else{
                    navigate(`/tests/pass/${passing_test}/question/${next_question}`)
                }
                
            },
            403: (response) => {
                const { passing_test, next_question, status } = response.data
                if (status === 2){
                    navigate(`/tests/passed/${passing_test}/`)
                }
                else{
                    navigate(`/tests/pass/${passing_test}/question/${next_question}`)
                }
            }
        }
    )


    return (
        <Formik onSubmit={(values) => {
            const passed_answers = []
            for (const answer of values.answers) {
                if (answer.isCorrect) {
                    passed_answers.push({ answer: answer.id })
                }
                if (answer.value) {
                    passed_answers.push({ answer: answer.id, value: answer.value })
                }
            }
            passQuestion({ passed_answers })

        }}>
            {(form) => <QuestionPassingForm waitForResponse={waitForResponse} params={params} {...form} />}
        </Formik>
    )
}


export const QuestionPassingForm = ({ setValues, values, params, waitForResponse, handleSubmit, ...form }) => {


    const navigate = useNavigate()

    const { passed_test, question } = params

    useEffect(() => {
        getPassQuestion({ passed_test, question })
    }, [passed_test, question])

    const [getPassQuestion, loading] = useRequest(
        TestsServise.getPassQuestion,
        {
            200: (response) => {
                const data = { ...response.data, answers: response.data.answers.map(answer => ({ ...answer, isCorrect: false, value: '' })) }
                setValues(data)
            },
            403: (response) => {
                const { passing_test, next_question, status } = response.data || {}
                if (!status){
                    navigate('/classes')
                }
                else{
                    navigate(`/tests/pass/${passing_test}/question/${next_question}`)
                }
            }
        })

    const answers = {
        1: <TextAnswerList viewMode={true} passingMode={true} data={values?.answers} name={`answers`} />,
        2: <OneFromListAnswer viewMode={true} passingMode={true} data={values?.answers} name={`answers`} form={form} />,
        3: <FewFromListAnswer viewMode={true} passingMode={true} data={values?.answers} name={`answers`} />
    }

    return values && <Form className={pagesCss.content_up_100_down_200}>
        <div className={questionCss.block}>
            <FormLoader condition={loading || waitForResponse}>
                <FormInput name='name' readOnly={true} />
                {answers[values.type]}
                <div className={questionCss.footer}>
                    <div className={questionCss.btns}>
                        <Button size={2} text={'Пропустить'} />
                        <Button size={2} onClick={handleSubmit} text={'Далeе'} />
                    </div>
                </div>
            </FormLoader>


        </div>
    </Form>
}



