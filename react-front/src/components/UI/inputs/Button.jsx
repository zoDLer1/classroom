import css from './css/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function Button({ text, disabled, loading = false, icon, size = 1, ...props }) {
    return (
        <button type='button' {...props} className={[css.block, css[`size-${size}`], css[`disabled-${disabled}`]].join(' ')}>
            {!loading
                ? <>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    {text}
                </>
                : <FontAwesomeIcon icon={faSpinner} spinReverse spinPulse size='lg' />
            }
        </button>
    )
}

export default Button