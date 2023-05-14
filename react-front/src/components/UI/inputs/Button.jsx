import css from './css/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function Button({ text, loading = false, ...props }) {
    return (
        <div {...props} className={css.block}>
            {!loading
                ? text
                : <FontAwesomeIcon icon={faSpinner} spinReverse spinPulse size='lg' />
            }
        </div>
    )
}

export default Button