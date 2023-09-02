import Link from 'components/UI/navigation/Link'
import Submit from './components/inputs/Submit'
import CheckBox from 'components/UI/inputs/CheckBox'
import LinkSwither from '../UI/navigation/LinkSwither'
import Messager from 'components/UI/navigation/Messager'
import FormInput from './components/inputs/FormInput'
import PasswordInput from './components/inputs/PasswordInput'
import formCss from './forms.module.css'
import css from './css/login-form.module.css'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Form } from 'formik'




function LoginForm({ isSubmitting }) {
    return (
        <Form className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Регистрация', to: '/accounts/register' }, { text: 'Войти', to: '/accounts/login' }]} className={css.links} selected={1} />
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput name="email"  placeholder="Почта" icon={faEnvelope} />
                <PasswordInput name="password" placeholder="Пароль" icon={faKey} />
            </div>
            <div className={css.submit}>
                <Submit text='Войти' loading={isSubmitting} />
            </div>
            <div className={[css.userFunctions, formCss.flex].join(' ')}>
                {/* <CheckBox>
                    <p className={css.remember}>Запомнить меня</p>
                </CheckBox> */}
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
        </Form>
    )
}

export default LoginForm