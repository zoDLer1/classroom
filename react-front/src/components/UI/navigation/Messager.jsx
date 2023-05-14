import css from './css/messager.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Messager = ({ to, size="xl", ...props }) => {
    return (
        <a className={css.icon} href={to}>
            <FontAwesomeIcon size={size} {...props} />
        </a>
    )
}

export default Messager