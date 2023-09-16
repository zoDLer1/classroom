import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import css from './css/development.module.css'
import { useNavigate } from "react-router-dom"
import Action from "components/UI/inputs/Action"


export default function InDevelopnemtPage() {

    const navigate = useNavigate()

    return (
        <div className={css.block}>
            <div className={css.body}>
                <FontAwesomeIcon className={css.icon} icon={faScrewdriverWrench} />
                <h2>Page is currently under development</h2>
            </div>
            <div>
                <Action onClick={() => navigate(-1)} text={'Return back'} icon={faArrowLeft} />
            </div>
        </div>
    )
}
