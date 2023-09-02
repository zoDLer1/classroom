import RegisterForm from 'components/forms/RegisterForm'
import MainLayout from 'layouts/MainLayout'
import { Formik } from 'formik'
import * as Yup from 'yup';
import useRequest from 'hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'hooks/user/useUser'
import AuthService from 'services/AuthService'

const registerSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Заполните поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    last_name: Yup.string()
        .required('Заполните поле')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    email: Yup.string()
        .required('Заполните поле')
        .email('Введите правильный email')
        .min(2, 'Поле должно содержать не менее 2 символов')
        .max(50, 'Поле должно содержать не более 50 символов'),
    role: Yup.number()
        .required()
        .positive()
        .integer(),
    password: Yup.string()
        .required('Заполните поле')
        .min(6, 'Поле должно содержать не менее 6 символов'),
    password_confim: Yup.string()
        .required('Заполните поле')
        .min(6, 'Поле должно содержать не менее 6 символов')

});


function Register() {

    const navigate = useNavigate()
    const user = useUser()

    const [sendRegisterRequest, waitForResponse] = useRequest(
        AuthService.register,
        {
            200: (response) => {
                user.authenticate(response.data.user, response.data.access)
                navigate('/classes')
            },
        }
    )

    const validateRegister = (values) => {
        const errors = {}
        if (values.password_confim !== values.password) {
            errors.password = 'Пароли не совпадпют'
        }
        return errors
    }
    return (
        <MainLayout>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    role: '',
                    password: '123123123s',
                    password_confim: '123123123s',
                }}
                validationSchema={registerSchema}
                validate={validateRegister}
                onSubmit={
                    async (values, { setErrors, setSubmitting }) => {
                        await sendRegisterRequest(values, { 400: (response) => setErrors(response.response.data) })
                        setSubmitting(false)
                    }
                }
            >
                {RegisterForm}
            </Formik>

        </MainLayout>
    )
}

export default Register 
