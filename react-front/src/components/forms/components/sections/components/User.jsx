import css from './css/user.module.css'
import Action from "components/UI/inputs/Action"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'


function User({ id, first_name, last_name, avatar, actions = [], isLoading = false }) {


    const [actionUsed, setActionUsed] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            setActionUsed(false)
        }

    }, [isLoading])

    return (
        <div className={css.block}>
            <div className={css.body}>
                <img src={avatar || "https://lh3.googleusercontent.com/a/default-user=s36-c"} draggable="false" alt="..." className={css.avatar} />
                <div className={css.name}>
                    <p className={css.firstName}>{first_name}</p>
                    <p className={css.lastName}>{last_name}</p>
                </div>
            </div>
            {
                !isLoading
                    ? <div className={css.actions}>
                        {actions.map(({ onPress, ...action }, index) => <Action key={index} {...action} onClick={() => { setActionUsed(true); onPress(id) }} />)}
                    </div>
                    : actionUsed && <FontAwesomeIcon icon={faSpinner} spinPulse color='var(--primary-color)' size='lg' />
            }

        </div>
    )
}

export default User
