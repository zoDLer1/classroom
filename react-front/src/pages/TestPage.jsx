
import { useParams } from "react-router-dom"
import PassedTestsForm from "components/forms/PassedTestsForm"
import PassedTestsStatisticForm from "components/forms/PassedTestsStatisticForm"
import { useLocation } from "react-router-dom"
import css from './pages.module.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



export default function TestPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { hash } = useLocation()

    useEffect(()=>{
        if (hash !== '#statistic' && hash !== '#results'){
            navigate('#results')
        }
    },[hash])

    return (
        <div className={css.content_up_100_down_200} >
            {hash === '#results' && <PassedTestsForm id={id} />}
            {hash === '#statistic' && <PassedTestsStatisticForm id={id} />}
        </div>
    )
}
