import css from './css/profile.module.css'
import PageSection from 'components/pageSection'
import ProfileForm from 'components/forms/profile-form'
import { useState } from 'react'


export default () =>  {
    // useState
    return (
        <PageSection className={css.section}>
            <ProfileForm />
        </PageSection>
    )
}
