import Input from 'UI/Input'
import Link from 'UI/Link'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'
import NavLink from 'UI/NavLink'
import css from './registerForm.module.css'
import formCss from '../forms.module.css'
import PasswordInput from 'UI/PasswordInput'
import Select from 'UI/Select'
import { useState } from 'react'


function RegisterForm () {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        password: '',
        repeat_password: ''
    })


    const onSubmit = (evt) =>{
        evt.preventDefault()
        // send request
    }


    const roles = [
        { name: 'Student', id: 1 }, 
        { name: 'Teacher', id: 2 }
    ]

    return (
        <form onSubmit={onSubmit} action="" className={[formCss.block, formCss.flex].join(' ')}>
            <div className={[css.links, formCss.links, formCss.flex].join(' ')}>
                <NavLink to='/accounts/register' isChoosen={true} text='Register' ></NavLink>
                <NavLink to='/accounts/login' text='Sign in' ></NavLink>
            </div>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Input value={formData.username} onChange={(evt)=> setFormData({...formData, username: evt.target.value})} name="username" placeholder="Username" icon='fa-regular fa-user' />
                <Input value={formData.email} onChange={(evt)=> setFormData({...formData, email: evt.target.value})} name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                <Select select={(role)=> setFormData({...formData, role: role})} value={formData.role.name} options={roles} name='role' placeholder="Role" icon="fa-solid fa-graduation-cap" />
                <PasswordInput value={formData.password} onChange={(evt)=> setFormData({...formData, password: evt.target.value})} name="password" placeholder="Password" icon='fa-solid fa-key' />
                <PasswordInput value={formData.repeat_password} onChange={(evt)=> setFormData({...formData, repeat_password: evt.target.value})} name="repeat_password" placeholder="Repeat password" icon='fa-solid fa-key' />
            </div>
            <div className={css.statements}>
                <Checkbox text='I agree all statements in'>
                    <Link to='/' text='Terms of servise' />
                </Checkbox>
            </div>
            <div className={css.submit}>
                <Submit text='register' />
            </div>

            <div className={[formCss.text, formCss.flex, css.login].join(' ')}>
                Have already an account?
                <Link to='/accounts/login' text='Login here' />
            </div>
        </form>
    )
}
export default RegisterForm