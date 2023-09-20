import css from './css/messager.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Messager = ({ to, size="xl", ...props }) => {
    return (
        <a className={'text-gray-450'} href={to}>
            <FontAwesomeIcon size={size} {...props} />
        </a>
    )
}

export default Messager