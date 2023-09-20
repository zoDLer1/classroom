import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const FormLoader = ({ children, condition }) => {
    return condition ? <div className='flex w-full h-full z-10 flex-1 justify-center items-center'>
        <FontAwesomeIcon size='2xl' spinPulse className='text-primary' icon={faSpinner}></FontAwesomeIcon>
    </div> : children

}
export default FormLoader
