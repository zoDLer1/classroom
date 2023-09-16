import { useInitialRequest } from "hooks/requests/useInitialRequest"
import { useParams } from "react-router-dom"
import TestsServise from "services/TestsService"
import TestHeader from "components/forms/TestHeader"
import pagesCss from './pages.module.css'
import useRequest from "hooks/requests/useRequest"
import { faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Formik, Form } from "formik"
import Button from 'components/UI/inputs/Button'
import headerCss from 'components/forms/css/form-header.module.css'

export default function TestsPassingPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState()

    const toNext = ({ passing_test, next_question, status }) => {
        if (status === 2){
            navigate(`/tests/passed/${passing_test}/`, { replace: true })
        }
        else{
            navigate(`/tests/pass/${passing_test}/question/${next_question}`,  { replace: true })
        }
    }

    const [passRequest] = useRequest(
        async () => await TestsServise.pass(id),
        {
            200: (resp) => toNext(resp.data)
        }
    )







    const [loading] = useInitialRequest(id, TestsServise.get, {
        200: (req) => {

            const { passed_status, ...data } = req.data
            if (passed_status === 0){
                setData(data)
            }
            else{
                passRequest()
            }   
        }
    })

    return (

        data && <Formik
            initialValues={{ ...data.template_info }}>
            {() => {
                return <Form className={pagesCss.content_up_100_down_200}>
                    <TestHeader viewMode={true}>
                        <div className={headerCss.footer}>
                            <div className={headerCss.footer_btns}>
                                <Button text={'Назад'} onClick={() => navigate(-1)} size={2} icon={faArrowLeft} style={{ backgroundColor: 'rgb(240, 167, 32)' }} />
                                <Button loading={loading} text={'Старт'} onClick={passRequest} size={2} icon={faPlay} />
                            </div>
                        </div>
                    </TestHeader>
                </Form>
            }}
        </Formik>
    )
}
