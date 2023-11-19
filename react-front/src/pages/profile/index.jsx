import css from './css/profile.module.css'
import ProfileForm from 'components/forms/profile-form'
import { useState } from 'react'


export default () =>  {
    const [userData, setUserData] = useState({
        firstname: 'Alex',
        lastname: 'Faml',
        role: 'Teacher',
        email: 'alex1992@e.ti'
    })
    return (
        <div className={css.section}>
            <ProfileForm data={userData}/>
        </div>
    )
}
