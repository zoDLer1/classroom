import { useInitialRequest } from "hooks/useInitialRequest"
import { useParams } from "react-router-dom"
import TestsServise from "services/TestsService"
import TestHeader from "components/forms/components/tests/TestHeader"
import useForm from "hooks/forms/useForm"
import pagesCss from './pages.module.css'
import useRequest from "hooks/useRequest"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import css from 'components/forms/components/tests/css/question-list.module.css'
import Question from 'components/forms/components/tests/components/Question'
import useFormList from 'hooks/forms/useFormList'
import { useState } from "react"



export default function TestsPassingPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { hash } = useLocation()

    const extractData = (data) => {
        const passed_questions = []
        console.log(data)

        for (const question of data.questions) {
            const passed_question = { question: question.id }
            const passed_answers = []
            if (question.time) {
                passed_question['time'] = Math.floor(question.time)
            }

            for (const answer of question.answers) {
                if (answer.isCorrect) {

                    const passed_answer = { answer: answer.id }
                    if (answer.value) {
                        passed_answer['value'] = answer.value
                    }
                    passed_answers.push(passed_answer)
                }
            }
            if (passed_answers.length) {
                passed_question['passed_answers'] = passed_answers
                passed_questions.push(passed_question)
            }
        }

        return { passed_questions }
    }

    const passRequest = useRequest(
        async (data) => await TestsServise.pass(data.id, extractData(data)),
        {
            200: (resp) => navigate(`/tests/passed/${resp.data.id}/`),
            201: (resp) => navigate(`/tests/passed/${resp.data.id}/`)
        }
    )


    const [QuestionIndex, setIndex] = useState(Number(localStorage.getItem('QuestionIndex')) || 0)

   




    useEffect(() => {
        if (!hash) {
            if (!QuestionIndex) {
                navigate('#start')
            }
            else {
                navigate('#question-' + QuestionIndex)
            }
        }
        else if (hash.startsWith('#question')) {
            const index = Number(hash.split('-')[1])

            if ((index - QuestionIndex === 1 || index === QuestionIndex)) {
                if (index >= module.values.length) {
                    localStorage.removeItem('QuestionIndex')
                    navigate('#send')
                }
                else {
                    setIndex(index)
                    localStorage.setItem('QuestionIndex', index)
                }

            }
            else {
                navigate('#question-' + QuestionIndex)
            }
        }

    }, [hash])

    const next = () => {
        if (QuestionIndex < module.values.length) {
            navigate('#question-' + (QuestionIndex + 1))
        }
        else {
            navigate('#pass')
        }

    }


    const { inputs, getSubmit, setValues, getModule, getInput } = useForm({
        id: {
            value: ''
        },
        name: {
            value: ''
        },
        description: {
            value: ''
        },
        questions: {}
    }, passRequest)

    const { onClick } = getSubmit()

    useEffect(() => {
        if (hash === '#send'){
            onClick()
        }
    }, [inputs])

    useInitialRequest(id, TestsServise.get, {
        200: (req) => setValues({ name: req.data.template.name, description: req.data.template.description, questions: req.data.template.questions, id: req.data.id })
    })
    const module = getModule('questions')
    const { addListItem, getListItem, removeItem } = useFormList(module, 0)


    return (
        <div className={pagesCss.content_up_100_down_200}>
            {hash === '#start'
                ? <TestHeader start={() => navigate('#question-0')} mode={'pass'} getInput={getInput} />
                : hash !== '#send' && module.values.length && <div className={css.block}>
                    {module.values.map((item, index) =>
                        <Question
                            hide={index !== QuestionIndex}
                            mode={'pass'}
                            onNext={next}
                            remove={() => removeItem(index)}
                            isNotRemove={module.values.length > 1}
                            index={index}
                            key={index}
                            isLast={module.values.length - 1 === index}
                            add={() => addListItem(index)}
                            {...getListItem(index)}
                        />)}
                </div>
            }
        </div>

    )
}
