import TestsServise from "services/TestsService"
import { useInitialRequest } from "hooks/useInitialRequest"
import { useParams } from "react-router-dom"
import PageSection from "components/pageSection"
import TemplateCreationForm from "components/forms/TemplateCreationForm"
import css from './pages.module.css'
import { useState } from "react"
import footerCss from 'components/forms/components/tests/css/footer.module.css'
import Action from "components/UI/inputs/Action"
import { useNavigate } from "react-router-dom"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const Footer = ({ _class }) => {
    const navigate = useNavigate()
    return <div className={footerCss.block}>
        <Action text={'Назад'} onClick={() => navigate('/classes/' + _class)} icon={faAngleLeft}></Action>
    </div>
}

export default function PassedTestPage() {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useInitialRequest(
        id,
        TestsServise.getPassedTest,
        {
            200: (resp) => {
                const test_data = { ...resp.data.test_info, _class: resp.data._class }
                const questions = []
                for (const passed_question of resp.data.passed_questions) {
                    const { id, ...question_info } = passed_question.question_info
                    const { is_correct, passed_answers, time } = passed_question
                    const question = { ...question_info, is_correct, passed_answers, passed_time: time }
                    questions.push(question)
                }
                test_data['questions'] = questions
                setData(test_data)
                console.log(test_data)
            }
        }
    )

    return (
        <PageSection className={css.section}>
            {data && <TemplateCreationForm mode={'view'} data={data}>

                <Footer _class={data._class} />
            </TemplateCreationForm>}

        </PageSection>
    )
}

