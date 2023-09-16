
import { useParams } from "react-router-dom"
import ContentUpper from "../containers/ContentUpper"
import FormLoader from "components/forms/FormLoader"
import formCss from 'components/forms/css/form.module.css'
import TestsServise from "services/TestsService"
import { useInitialRequest } from "hooks/requests/useInitialRequest"
import { useState } from "react"
import TestForm from "components/forms/TestForm"



export default function TestPage() {

    const { id } = useParams()

    const [testData, setData] = useState()

    const [isLoading] = useInitialRequest(id, TestsServise.get, {
        200: (request) => {
            const { passed_tests, template_info, _class, settings, statistic } = request.data
            setData({ results: { passed_tests, template_info, _class }, settings, statistic })
        }
    })

    return (
        <ContentUpper>
            <div style={{ padding: 20 }} className={formCss.body}>
                <FormLoader condition={isLoading}>
                    <TestForm id={id} testData={testData} />
                </FormLoader>
            </div>
        </ContentUpper>
    )
}


