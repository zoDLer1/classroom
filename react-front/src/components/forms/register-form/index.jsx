import Input from 'UI/Input'
import Link from 'UI/Link'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'
import NavLink from 'UI/NavLink'
import css from './css/registerForm.module.css'
import formCss from 'components/forms/css/form.module.css'
import PasswordInput from 'UI/PasswordInput'
import Select from 'UI/Select'


export default () => {
    const roles = [
        { name: 'Student', id: 1 }, 
        { name: 'Teacher', id: 2 }
    ]
    return (
        <form action="" className={[formCss.block, formCss.flex].join(' ')}>
            <div className={[css.links, formCss.links, formCss.flex].join(' ')}>
                <NavLink to='/accounts/register' isChoosen={true} text='Register' ></NavLink>
                <NavLink to='/accounts/login' text='Sign in' ></NavLink>
            </div>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Input name="username" placeholder="Username" icon='fa-regular fa-user' />
                <Input name="email" placeholder="Email" icon='fa-solid fa-envelope' />
                <Select value='' options={roles} name='role' placeholder="Role" icon="fa-solid fa-graduation-cap" />
                <PasswordInput name="password" placeholder="Password" icon='fa-solid fa-key' />
                <PasswordInput name="repeat_password" placeholder="Repeat password" icon='fa-solid fa-key' />
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