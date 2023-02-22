import css from './css/profile.module.css'
import PageSection from 'components/pageSection'
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
        <PageSection className={css.section}>
            <ProfileForm data={userData}/>
        </PageSection>
    )
}
