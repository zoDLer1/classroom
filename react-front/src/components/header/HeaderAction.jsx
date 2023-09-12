import css from './css/headerAction.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderAction({ icon, text, action }) {
    return (
        <div className={css.block} onClick={action}>
            <FontAwesomeIcon className={css.icon} icon={icon}></FontAwesomeIcon>
            <p className={css.text}>{text}</p>
        </div>
    )
}

export default HeaderAction
