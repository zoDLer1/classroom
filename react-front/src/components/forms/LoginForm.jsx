import Link from 'components/UI/navigation/Link'
import Submit from './inputs/Submit'
import Messager from 'components/UI/navigation/Messager'
import FormInput from './inputs/FormInput'
import PasswordInput from './inputs/PasswordInput'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Form } from 'formik'




function LoginForm({ isSubmitting }) {
    return (
        <Form>
            <div className='flex flex-col gap-10 min-w-[310px] my-10'>
                <FormInput name="email" placeholder="Почта" icon={faEnvelope} />
                <PasswordInput name="password" placeholder="Пароль" icon={faKey} />
            </div>
            <div className='mb-7'>
                <Submit text='Войти' loading={isSubmitting} />
            </div>
            <Link to='/' text='Забыли пароль?' />
            <div className='flex mt-8 justify-between gap-2'>
                <p className='text-gray-450 text-base'>Sign up with</p>
                <div className='flex gap-3'>
                    <Messager to='https://www.google.com' icon={faVk} />
                    <Messager to='https://www.google.com' icon={faTwitter} />
                    <Messager to='https://www.google.com' icon={faFacebookF} />
                </div>
            </div>
        </Form>
    )
}

export default LoginForm