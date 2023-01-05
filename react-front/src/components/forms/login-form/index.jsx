import Input from 'UI/Input'
import Link from 'UI/Link'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'
import IconCheckbox from 'UI/IconCheckbox'
import Messager from 'UI/Messager'
import css from './css/loginForm.module.css'
import { useState } from 'react'
import NavLink from 'UI/NavLink'




export default () => {
    const [type, setType] = useState('password')

    const toggleType = (evt) => {
        setType(type === 'password' ? 'text': 'password')
    }

    return (
        <form className={[css.block, css.flex].join(' ')}>
                <div className={[css.links, css.flex].join(' ')}>
                    <NavLink to='/register' text='Register' ></NavLink>
                    <NavLink to='/login' text='Sign in' isChoosen={true}></NavLink>
                </div>
                <div className={css.inputs}>
                    <Input name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                    <Input name="password" type={type} placeholder="Password" icon='fa-solid fa-key' ads={[<IconCheckbox icon='fa-regular fa-eye-slash' name="password" func={toggleType} />] } />
                </div>
                <div className={css.submit}>
                    <Submit text='login'/>
                </div>
                <div className={[css.ads, css.flex].join(' ')}>
                    <Checkbox text='Remember me' />
                    <Link to='/' text='Recover password' />
                </div>
                <div className={[css.signup, css.flex].join(' ')}>
                    <p className={css.text}>Sign up with</p>
                    <div className={[css.messagers, css.flex].join(' ')}>
                        <Messager to='https://www.google.com' icon='fa-brands fa-vk' />
                        <Messager to='https://www.google.com' icon='fa-brands fa-twitter' />
                        <Messager to='https://www.google.com' icon='fa-brands fa-facebook-f' />
                    </div>
                </div>
                
        </form>
    )
}