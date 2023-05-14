import FormInput from './components/inputs/FormInput'
import Link from 'components/UI/navigation/Link'
import CheckBox from 'components/UI/inputs/CheckBox'
import LinkSwither from 'components/UI/navigation/LinkSwither'
import css from './css/register-form.module.css'
import formCss from './forms.module.css'
import Submit from './components/inputs/Submit'
import FormSelect from './components/inputs/FormSelect'
import PasswordInput from './components/inputs/PasswordInput'
import AuthService from 'services/AuthService'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faGraduationCap, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { IS_EMAIL__VALIDATOR, MAX_LENGTH__VALIDATOR, REQUIRED__VALIDATOR, PASSWORDS_MATCH__VALIDATOR } from 'validation/validators'
import useForm from 'hooks/forms/useForm'
import useRequest from 'hooks/useRequest'


function RegisterForm() {

    const { FIRST_PASSWORD__VALIDATOR, SECOND_PASSWORD__VALIDATOR } = PASSWORDS_MATCH__VALIDATOR()
    

    const registerRequest = useRequest(
        async (validatedData) => await AuthService.register(validatedData),
        {
            200: (response)=>console.log(response),
            400: (response) => {
                handleServerErrors(response.response.data)
            }
        }
    )

    const { getInput, getSubmit, handleServerErrors } = useForm({
        first_name: {
            validators: [REQUIRED__VALIDATOR(), MAX_LENGTH__VALIDATOR(50)]
        },
        last_name: {
            validators: [REQUIRED__VALIDATOR(), MAX_LENGTH__VALIDATOR(50)]
        },
        email: {
            validators: [REQUIRED__VALIDATOR(), IS_EMAIL__VALIDATOR(), MAX_LENGTH__VALIDATOR(70)]
        },
        role: {
            validators: [REQUIRED__VALIDATOR()],
            options: {
                selectOptions: [
                    { name: 'Ученик', id: 1 },
                    { name: 'Преподаватель', id: 2 }
                ]
            }
        },
        password: {
            validators: [FIRST_PASSWORD__VALIDATOR(), REQUIRED__VALIDATOR()],
            linked: ["repeat_password"]

        },
        password_confim: {
            validators: [SECOND_PASSWORD__VALIDATOR(), REQUIRED__VALIDATOR()],
            linked: ["password"]
        }
    }, registerRequest)




    return (
        <div className={[formCss.block, formCss.flex].join(' ')}>
            <LinkSwither links={[{ text: 'Регистрация', to: '/accounts/register' }, { text: 'Войти', to: '/accounts/login' }]} className={css.links} selected={0} />
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormInput {...getInput('first_name')} placeholder="Имя" icon={faUser} />
                <FormInput {...getInput('last_name')} placeholder="Фамилия" icon={faUser} />
                <FormInput {...getInput('email')} placeholder="Почта" icon={faEnvelope} />
                <FormSelect {...getInput('role')} placeholder="Роль" icon={faGraduationCap} />
                <PasswordInput {...getInput('password')} placeholder="Пароль" icon={faKey} />
                <PasswordInput {...getInput('password_confim')} placeholder="Повторите пароль" icon={faKey} />
            </div>
            <div className={css.statements}>
                <CheckBox>

                    <p className={css.text}>
                        Я принимаю
                    </p>
                    <Link to='/' text='Лицензионное соглашениe' />


                </CheckBox>
            </div>
            <div className={css.submit}>
                <Submit text='Регистрация' {...getSubmit()} />
            </div>

            <div className={[formCss.text, formCss.flex, css.login].join(' ')}>
                Уже есть аккаунт?
                <Link to='/accounts/login' text='Войти' />
            </div>
        </div>
    )
}
export default RegisterForm