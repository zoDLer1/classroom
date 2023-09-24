import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const FormLoader = ({ children, condition }) => {
    return condition ? <div className='flex-ic-jc w-full h-full z-10 flex-1'>
        <FontAwesomeIcon size='2xl' spinPulse className='text-primary' icon={faSpinner}></FontAwesomeIcon>
    </div> : children

}
export default FormLoader
