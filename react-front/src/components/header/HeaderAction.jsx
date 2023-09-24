import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderAction({ icon, text, action }) {
    return (
        <div className='cursor-pointer flex-ic gap-2 select-none relative' onClick={action}>
            <FontAwesomeIcon className='text-white text-1.5xl' icon={icon}></FontAwesomeIcon>
            <p className='text-white text-lg'>{text}</p>
        </div>
    )
}

export default HeaderAction
