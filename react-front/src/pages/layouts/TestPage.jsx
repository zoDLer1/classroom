
import { useParams } from "react-router-dom"
import ContentUpper from "../containers/ContentUpper"
import FormLoader from "components/forms/FormLoader"
import TestsServise from "services/TestsService"
import { useInitialRequest } from "hooks/requests/useInitialRequest"
import { useEffect, useState } from "react"
import TestForm from "components/forms/TestForm"
import { useHeaderBack } from "hooks/globalUI/useGlobalUI"
import { useLocation, useNavigate } from 'react-router-dom'


export default function TestPage() {

    const location = useLocation()


    const [pages, setPages] = useState([])
    useEffect(() => {
        setPages([{
            text: 'Результаты',
            url: 'results'
        }])
    }, [])
    

    const { id } = useParams()

    const navigate = useNavigate()

    const [testData, setData] = useState()

    const [isLoading] = useInitialRequest(id, TestsServise.get, {
        200: (request) => {
            const { passed_tests, template_info, _class, settings, statistic } = request.data
            if (statistic) {
                setPages((pages) => [...pages, {
                    text: 'Статистика',
                    url: 'statistic'
                }])
            }
            if (settings) {
                setPages((pages) => [...pages, {
                    text: 'Настройки',
                    url: 'settings'
                }])
            }
            setData({ results: { passed_tests, template_info, _class }, settings, statistic })
        },
        'bad': () => navigate(-1)
    })

    useHeaderBack([location.pathname], `/classes/${testData?.results?._class?.id}/tests`)

    return (
        <ContentUpper>
            <div className='p-5 gap-2.5 w-192 rounded-2xs box min-h-58'>
                <FormLoader condition={isLoading}>
                    <TestForm pages={pages} id={id} testData={testData} />
                </FormLoader>
            </div>
        </ContentUpper>
    )
}


