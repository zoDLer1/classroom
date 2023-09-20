import React from 'react'
import PageLinks from 'components/UI/navigation/PageLinks'
import { Outlet } from 'react-router-dom'
import ContentCenter from '../containers/ContentCenter'


export default function SignLayout() {

    const links = [
        { text: 'Регистрация', to: '/accounts/register' },
        { text: 'Войти', to: '/accounts/login' }
    ]

    return (
        <ContentCenter>
            <div className='flex items-center flex-col rounded-[55px] container px-20 py-11'>
                <PageLinks links={links} />
                <Outlet />
            </div>
        </ContentCenter>
    )
}
