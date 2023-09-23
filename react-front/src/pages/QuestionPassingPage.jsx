import { useNavigate, useParams } from 'react-router-dom'
import TestsServise from 'services/TestsService'
import { Formik, Form } from 'formik'
import FormInput from 'components/forms/inputs/FormInput'
import TextAnswerList from 'components/lists/TextAnswer'
import FewFromListAnswer from 'components/lists/FewFromListAnswer'
import OneFromListAnswer from 'components/lists/OneFromListAnswer'
import FormLoader from 'components/forms/FormLoader'
import Button from 'components/UI/inputs/Button'
import useRequest from 'hooks/requests/useRequest'
import { useEffect } from 'react'
import ContentUpper from './containers/ContentUpper'
import { useTimer } from 'hooks/useTimer'


export default function QuestionPassingPage() {

    const params = useParams()
    const navigate = useNavigate()

    const toNext = ({ passing_test, next_question, status }) => {
        if (status === 2) {
            navigate(`/tests/passed/${passing_test}/`)
        }
        else {
            navigate(`/tests/pass/${passing_test}/question/${next_question}`)
        }
    }

    const [passQuestion, waitForResponse] = useRequest(async (data) => await TestsServise.passQuestion(params, data),
        {
            200: (response) => toNext(response.data),
            403: (response) => toNext(response.data)
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
            console.log(values.time)
            passQuestion({ passed_answers, time: values.time })

        }}>
            {(form) => <QuestionPassingForm waitForResponse={waitForResponse} params={params} {...form} />}
        </Formik>
    )
}


export const QuestionPassingForm = ({ setValues, values, params, waitForResponse, handleSubmit, submitForm, ...form }) => {

    const { time, start, reset } = useTimer(async () => {
        await form.setFieldValue('time', Math.round(values.deadline))
        submitForm()
    })

    useEffect(() => {
        if (values?.deadline) {
            reset()
            start(values.deadline)
        }
    }, [values?.deadline])

    const submit = async (e) => {
        await form.setFieldValue('time', time ? Math.round(time * 100) / 100 : null)
        handleSubmit(e)
    }

    const navigate = useNavigate()

    const { passed_test, question } = params

    useEffect(() => {
        getPassQuestion({ passed_test, question })
    }, [passed_test, question])

    const [getPassQuestion, loading] = useRequest(
        TestsServise.getPassQuestion,
        {
            200: (response) => {
                const data = { ...response.data, deadline: response.data.time, time: null, answers: response.data.answers.map(answer => ({ ...answer, isCorrect: false, value: '' })) }
                setValues(data)
            },
            403: (response) => {
                const { passing_test, next_question, status } = response.data || {}
                if (!status) {
                    navigate('/classes')
                }
                else {
                    navigate(`/tests/pass/${passing_test}/question/${next_question}`)
                }
            }
        })

    const answers = {
        1: <TextAnswerList viewMode={true} passingMode={true} data={values?.answers} name={`answers`} />,
        2: <OneFromListAnswer viewMode={true} passingMode={true} data={values?.answers} name={`answers`} form={form} />,
        3: <FewFromListAnswer viewMode={true} passingMode={true} data={values?.answers} name={`answers`} />
    }

    return values && <ContentUpper>
        <Form>
            <div className='group flex flex-col gap-9 py-12 px-20 bg-white shadow-70_20 rounded-[55px] relative min-h-[285px] w-[53rem] overflow-hidden'>
                <div className='w-0 h-2 bg-primary absolute top-0 left-0' style={{ width: time / values.deadline * 100 + '%' }}></div>
                <FormLoader condition={loading || waitForResponse}>
                    <FormInput name='name' readOnly={true} />
                    {answers[values.type]}
                    <div className='border-t-2 border-gray-450 pt-4 flex justify-end gap-5 items-center'>
                        <div className='flex gap-5'>
                            <Button size={2} text={'Пропустить'} />
                            <Button size={2} onClick={submit} text={'Далeе'} />
                        </div>
                    </div>
                </FormLoader>


            </div>
        </Form>
    </ContentUpper>
}



