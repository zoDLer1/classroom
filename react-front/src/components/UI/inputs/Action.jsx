import css from './css/action.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Action({ text, icon, styleAction = 'default', disabled = false, onClick, compact=false }) {


    return (
        <div onClick={() => !disabled && onClick()} className={[css.block, css[styleAction], css[`disabled-${disabled}`], css[`compact-${compact}`]].join(' ')}>
            <div className={css.text}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {text && <span >{text}</span>}
            </div>
        </div>
    )
}
export default Action
