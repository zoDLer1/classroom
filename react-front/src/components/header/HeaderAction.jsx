import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderAction({ icon, text, action }) {
    return (
        <div className='cursor-pointer flex gap-2 items-center select-none relative' onClick={action}>
            <FontAwesomeIcon className='text-white text-[22px]' icon={icon}></FontAwesomeIcon>
            <p className='text-white text-lg'>{text}</p>
        </div>
    )
}

export default HeaderAction
