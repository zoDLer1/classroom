import css from './action.module.css'
import { Link } from 'react-router-dom'

function Action ({text, icon, styleAction='default', to, disabled=false, onClick}) {


    return (
        <div onClick={onClick} className={[css.block, css[styleAction], css[`disabled-${disabled}`]].join(' ')}>
            {icon && <i className={`${css.icon} ${icon}`}/>}
            {
                to
                ? <Link to={to} className={css.text}>{text}</Link>
                : <p className={css.text}>{text}</p>
            }
            
        </div>
    )
}
export default Action
