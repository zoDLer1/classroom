import Link from 'components/UI/navigation/Link'
import Submit from './components/inputs/Submit'
import CheckBox from 'components/UI/inputs/CheckBox'
import LinkSwither from '../UI/navigation/LinkSwither'
import Messager from 'components/UI/navigation/Messager'
import FormInput from './components/inputs/FormInput' 
import PasswordInput from './components/inputs/PasswordInput'
import formCss from './forms.module.css'
import css from './css/login-form.module.css'
import useRequest from 'hooks/useRequest'
import useForm from 'hooks/forms/useForm'
import AuthService from 'services/AuthService'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import { useNavigate } from 'react-router-dom'


function LoginForm() {
    const navigate = useNavigate()
    const loginRequest = useRequest(
        async (validatedData) => await AuthService.login(validatedData),
        {
            200: () => navigate('/classes'),
            400: (response) => {
                handleServerErrors(response.response.data)
            }
        }
    )
    const { getSubmit, getInput, handleServerErrors } = useForm({
        email: {
            validators: [REQUIRED__VALIDATOR()],
            value: '123@123.124'
        },
        password: {
            validators: [REQUIRED__VALIDATOR()],
            value: '123123123s'
        }
    },
    loginRequest)

    return (
        <form className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Регистрация', to: '/accounts/register' }, { text: 'Войти', to: '/accounts/login' }]} className={css.links} selected={1} />

            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput {...getInput('email')} placeholder="Почта" icon={faEnvelope} />
                <PasswordInput {...getInput('password')} placeholder="Пароль" icon={faKey} />
            </div>
            <div className={css.submit}>
                <Submit {...getSubmit()} text='Войти' />
            </div>
            <div className={[css.userFunctions, formCss.flex].join(' ')}>
                <CheckBox>
                    <p className={css.remember}>Запомнить меня</p>
                </CheckBox>
                <Link to='/' text='Забыли пароль?' />
            </div>
            <div className={[css.signup, formCss.flex].join(' ')}>
                <p className={formCss.text}>Sign up with</p>
                <div className={[css.messagers, formCss.flex].join(' ')}>
                    <Messager to='https://www.google.com' icon={faVk} />
                    <Messager to='https://www.google.com' icon={faTwitter} />
                    <Messager to='https://www.google.com' icon={faFacebookF} />
                </div>
            </div>
        </form>
    )
}

export default LoginForm