import FormInput from './components/inputs/FormInput'
import Link from 'components/UI/navigation/Link'
import CheckBox from 'components/UI/inputs/CheckBox'
import LinkSwither from 'components/UI/navigation/LinkSwither'
import css from './css/register-form.module.css'
import formCss from './forms.module.css'
import Submit from './components/inputs/Submit'
import FormSelect from './components/inputs/FormSelect'
import PasswordInput from './components/inputs/PasswordInput'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faGraduationCap, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'formik'

function RegisterForm({ isSubmitting }) {

    const RoleOptions = [
        { name: 'Ученик', id: 1 },
        { name: 'Преподаватель', id: 2 }
    ]


    return (
        <Form className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Регистрация', to: '/accounts/register' }, { text: 'Войти', to: '/accounts/login' }]} className={css.links} selected={0} />
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput name='first_name' placeholder="Имя" icon={faUser} />
                <FormInput name='last_name' placeholder="Фамилия" icon={faUser} />
                <FormInput name='email' placeholder="Почта" icon={faEnvelope} />
                <FormSelect name='role' options={RoleOptions} placeholder="Роль" icon={faGraduationCap} />
                <PasswordInput name='password' placeholder="Пароль" icon={faKey} />
                <PasswordInput name='password_confim' placeholder="Повторите пароль" icon={faKey} />
            </div>
            <div className={css.statements}>
                {/* <CheckBox>
                    <p className={css.text}>
                        Я принимаю
                    </p>
                    <Link to='/' text='Лицензионное соглашениe' />

                </CheckBox> */}
            </div>
            <div className={css.submit}>
                <Submit loading={isSubmitting} text='Регистрация'  />
            </div>

            <div className={[formCss.text, formCss.flex, css.login].join(' ')}>
                Уже есть аккаунт?
                <Link to='/accounts/login' text='Войти' />
            </div>
        </Form>
    )
}
export default RegisterForm