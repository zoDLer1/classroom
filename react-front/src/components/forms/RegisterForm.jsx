import FormInput from './inputs/FormInput'
import Link from 'components/UI/navigation/Link'
import css from './css/register-form.module.css'
import formCss from './forms.module.css'
import Submit from './inputs/Submit'
import FormSelect from './inputs/FormSelect'
import PasswordInput from './inputs/PasswordInput'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import FormCheckBox from './inputs/FormCheckBox'
import { faGraduationCap, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'formik'



function RegisterForm({ isSubmitting }) {

    const RoleOptions = [
        { name: 'Ученик', id: 1 },
        { name: 'Преподаватель', id: 2 }
    ]


    return (
        <Form>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput name='first_name' placeholder="Имя" icon={faUser} />
                <FormInput name='last_name' placeholder="Фамилия" icon={faUser} />
                <FormInput name='email' placeholder="Почта" icon={faEnvelope} />
                <FormSelect name='role' options={RoleOptions} placeholder="Роль" icon={faGraduationCap} />
                <PasswordInput name='password' placeholder="Пароль" icon={faKey} />
                <PasswordInput name='password_confim' placeholder="Повторите пароль" icon={faKey} />
            </div>
            <div className={css.statements}>
                <FormCheckBox name='lisence'> 
                    <p className={css.text}>
                        Я принимаю
                    </p>
                    <Link to='/' text='Лицензионное соглашениe' />
                </FormCheckBox>
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