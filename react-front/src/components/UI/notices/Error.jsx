import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import Notice from "./Notice"


function Error({ message }) {
    return (
        <Notice
            message={message}
            messageSlyle='border-[--error-color]'
        >
            <FontAwesomeIcon icon={faCircleExclamation} color='var(--error-color)' />

        </Notice>

    )
}

export default Error