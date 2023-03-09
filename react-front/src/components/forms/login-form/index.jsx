import Input from 'UI/Inputs/Input'
import Link from 'UI/Link'
import Submit from 'UI/Inputs/Submit'
import Checkbox from 'UI/Inputs/Checkbox'
import PasswordInput from 'UI/PasswordInput'
import Messager from 'UI/Messager'
import css from './loginForm.module.css'
import formCss from '../forms.module.css'
import { useState } from 'react'
import AuthService from 'services/AuthService'
import LinkSwither from 'UI/LinkSwitcher'
import { useNavigate } from 'react-router-dom'


function LoginForm () {
    
    
    const navigate = useNavigate()
    // const { isLoading, startLoading, stopLoading } = useLoading()
    
    const [formData, set] = useState({
        email: {value:'123@123.213'},
        password: {value:'123123'},
    })
    const OnSubmit = async (evt) =>{
        evt.preventDefault()
        // startLoading()
        await AuthService.auth(formData.email.value, formData.password.value)
        // stopLoading()
        navigate('/classes')

    } 
    return (
        <form onSubmit={OnSubmit} className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Register', to: '/accounts/register'}, {text: 'Sign in', to: '/accounts/login'}]} className={css.links} selected={1}/>

            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Input onChange={(evt)=>set({...formData, email: {...formData.email, value: evt.target.value}})} value={formData.email.value} name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                <PasswordInput onChange={(evt)=>set({...formData, password: {...formData.password, value: evt.target.value}})} value={formData.password.value} name="password" placeholder="Password" icon='fa-solid fa-key'/>
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


export default LoginForm