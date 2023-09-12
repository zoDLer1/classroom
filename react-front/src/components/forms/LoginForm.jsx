import Link from 'components/UI/navigation/Link'
import Submit from './inputs/Submit'
import CheckBox from 'components/UI/inputs/CheckBox'
import Messager from 'components/UI/navigation/Messager'
import FormInput from './inputs/FormInput'
import PasswordInput from './inputs/PasswordInput'
import formCss from './forms.module.css'
import css from './css/login-form.module.css'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Form } from 'formik'




function LoginForm({ isSubmitting }) {
    return (
        <Form>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput name="email"  placeholder="Почта" icon={faEnvelope} />
                <PasswordInput name="password" placeholder="Пароль" icon={faKey} />
            </div>
            <div className={css.submit}>
                <Submit text='Войти' loading={isSubmitting} />
            </div>
            <div className={[css.remember, formCss.flex].join(' ')}>
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