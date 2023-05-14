import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import Notice from "./Notice"


function Error({ message }) {
    return (
        <Notice>
            <FontAwesomeIcon icon={faCircleExclamation} color='var(--error-color)'/>
            <div style={{borderColor: 'var(--error-color)'}}>{message}</div>
        </Notice>

    )
}

export default Error