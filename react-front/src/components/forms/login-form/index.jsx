import Input from 'UI/Inputs/Input'
import Link from 'UI/Link'
import Submit from 'UI/Inputs/Submit'
import Checkbox from 'UI/Inputs/Checkbox'
import PasswordInput from 'UI/PasswordInput'
import Messager from 'UI/Messager'
import css from './loginForm.module.css'
import formCss from '../forms.module.css'
import { useState } from 'react'
import LinkSwither from 'UI/LinkSwitcher'
import { useLoading } from 'hooks/useLoading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'




function LoginForm ({ onSubmit }) {

    const { isLoading, startLoading, stopLoading } = useLoading()
    
    const [formData, set] = useState({
        email: {value:'123@123.213'},
        password: {value:'123123'},
    })
    const submit = async (evt) =>{
        evt.preventDefault()
        startLoading()
        await onSubmit(formData)
        stopLoading()
        

    } 
    return (
        <form onSubmit={submit} className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Register', to: '/accounts/register'}, {text: 'Sign in', to: '/accounts/login'}]} className={css.links} selected={1}/>

            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Input 
                    onChange={
                        (evt)=> set({...formData, email: {...formData.email, value: evt.target.value}})
                    } 
                    value={formData.email.value} 
                    name="email" 
                    placeholder="Email" 
                    icon={<FontAwesomeIcon icon={solid('envelope')} size="sm" />} 
                />

                <PasswordInput 
                    onChange={
                        (evt)=>set({...formData, password: {...formData.password, value: evt.target.value}})
                    } 
                    value={formData.password.value} 
                    name="password" 
                    placeholder="Password" 
                    icon={<FontAwesomeIcon icon={solid('key')} size="sm" />}/>
            </div>
            <div className={css.submit}>
                <Submit loading={isLoading} text='login'/>
            </div>
            <div className={[css.ads, formCss.flex].join(' ')}>
                <Checkbox text='Remember me' />
                <Link to='/' text='Recover password' />
            </div>
            <div className={[css.signup, formCss.flex].join(' ')}>
                <p className={formCss.text}>Sign up with</p>
                <div className={[css.messagers, formCss.flex].join(' ')}>
                    <Messager to='https://www.google.com'>
                        <FontAwesomeIcon icon={brands('vk')} size="xl" />
                    </Messager>
                    <Messager to='https://www.google.com'>
                        <FontAwesomeIcon icon={brands('twitter')} size="xl" />
                    </Messager>
                    <Messager to='https://www.google.com'>
                        <FontAwesomeIcon icon={brands('facebook')} size="xl" />
                    </Messager>

                </div>
            </div>
        </form>
    )
}


export default LoginForm