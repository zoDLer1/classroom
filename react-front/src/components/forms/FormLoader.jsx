import css from './css/form-loader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const FormLoader = ({ children, condition }) =>  {
    return condition ? <div className={css.block}><FontAwesomeIcon size='2xl' spinPulse className={css.icon} icon={faSpinner}></FontAwesomeIcon></div> : children
    
}
export default FormLoader
