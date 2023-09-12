import React from 'react'
import PageLinks from 'components/UI/navigation/PageLinks'
import { Outlet } from 'react-router-dom'
import ContentCenter from '../containers/ContentCenter'
import formCss from 'components/forms/forms.module.css'


export default function SignLayout() {

    const links = [
        { text: 'Регистрация', to: '/accounts/register' },
        { text: 'Войти', to: '/accounts/login' }
    ]

    return (
        <ContentCenter>
            <div className={[formCss.block, formCss.flex, formCss.pad_1].join(' ')}>
                <PageLinks links={links} />
                <Outlet />
            </div>
        </ContentCenter>
    )
}
