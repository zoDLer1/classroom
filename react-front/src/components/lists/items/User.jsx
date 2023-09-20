import Action from "components/UI/inputs/Action"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'


function User({ id, first_name, last_name, avatar, children, actions = [], isLoading = false }) {

    const [actionUsed, setActionUsed] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            setActionUsed(false)
        }

    }, [isLoading])

    return (
        <div className='group flex items-center justify-between p-[10px] border-b-[1px] border-solid border-gray-300 last:border-none'>
            <div className='flex items-center gap-5'>
                <img src={avatar || "https://lh3.googleusercontent.com/a/default-user=s36-c"} draggable="false" alt="..." className='rounded-full select-none h-9 w-9' />
                <div className='flex items-center gap-1'>
                    <p className='text-sm text-gray-750 font-medium'>{first_name}</p>
                    <p className='text-sm text-gray-750 font-medium'>{last_name}</p>
                </div>
            </div>
            {children && <div className={'group-hover:hidden'}>{children}</div>}
            {
                !isLoading
                    ? <div className='hidden group-hover:flex'>
                        {actions.map(({ onPress, ...action }, index) => <Action key={index} {...action} onClick={() => { setActionUsed(true); onPress(id) }} />)}
                    </div>
                    : actionUsed && <FontAwesomeIcon icon={faSpinner} spinPulse color='var(--primary-color)' size='lg' />
            }

        </div>
    )
}

export default User
