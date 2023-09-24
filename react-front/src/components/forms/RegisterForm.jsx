import FormInput from './inputs/FormInput'
import Link from 'components/UI/navigation/Link'
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
            <div className='w-75 mb-10 flex-vertical gap-8'>
                <FormInput name='first_name' placeholder="Имя" icon={faUser} />
                <FormInput name='last_name' placeholder="Фамилия" icon={faUser} />
                <FormInput name='email' placeholder="Почта" icon={faEnvelope} />
                <FormSelect name='role' options={RoleOptions} placeholder="Роль" icon={faGraduationCap} />
                <PasswordInput name='password' placeholder="Пароль" icon={faKey} />
                <PasswordInput name='password_confim' placeholder="Повторите пароль" icon={faKey} />
            </div>
            <div className='mb-5'>
                <FormCheckBox name='lisence'>
                    <p className='text-gray-450 text-base'>
                        Я принимаю
                    </p>
                    <Link to='/' text='Лицензионное соглашениe' />
                </FormCheckBox>
            </div>
            <div className='mb-5'>
                <Submit loading={isSubmitting} text='Регистрация' />
            </div>
            <div className='text-gray-450 text-base flex justify-center gap-3'>
                Уже есть аккаунт?
                <Link to='/accounts/login' text='Войти' />
            </div>
        </Form>
    )
}
export default RegisterForm