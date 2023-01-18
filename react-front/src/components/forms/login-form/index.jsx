import Input from 'UI/Input'
import Link from 'UI/Link'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'
import NavLink from 'UI/NavLink'
import PasswordInput from 'UI/PasswordInput'
import Messager from 'UI/Messager'
import css from './css/loginForm.module.css'
import formCss from 'components/forms/css/form.module.css'
import { useState } from 'react'






export default () => {



    return (
        <form className={[formCss.block, formCss.flex].join(' ')}>
            <div className={[css.links, formCss.links, formCss.flex].join(' ')}>
                <NavLink to='/accounts/register' text='Register' ></NavLink>
                <NavLink to='/accounts/login' text='Sign in' isChoosen={true}></NavLink>
            </div>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Input  name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                <PasswordInput name="password" placeholder="Password" icon='fa-solid fa-key'/>
            </div>
            <div className={css.submit}>
                <Submit text='login'/>
            </div>
            <div className={[css.ads, formCss.flex].join(' ')}>
                <Checkbox text='Remember me' />
                <Link to='/' text='Recover password' />
            </div>
            <div className={[css.signup, formCss.flex].join(' ')}>
                <p className={formCss.text}>Sign up with</p>
                <div className={[css.messagers, formCss.flex].join(' ')}>
                    <Messager to='https://www.google.com' icon='fa-brands fa-vk' />
                    <Messager to='https://www.google.com' icon='fa-brands fa-twitter' />
                    <Messager to='https://www.google.com' icon='fa-brands fa-facebook-f' />
                </div>
            </div>
        </form>
    )
}