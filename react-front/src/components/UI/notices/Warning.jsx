import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import Notice from "./Notice"


function Warning({ message }) {
    return (
        <Notice>
            <FontAwesomeIcon icon={faTriangleExclamation} color='var(--warning-color)'/>
            <div>{message}</div>
        </Notice>

    )
}

export default Warning