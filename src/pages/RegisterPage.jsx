import RegisterForm from 'components/forms/RegisterForm'
import { Formik } from 'formik'
import { RegisterSchema } from 'validation/Schemes'
import useRequest from 'hooks/requests/useRequest'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'hooks/store/useUser'
import AuthService from 'services/AuthService'




function RegisterPage() {

    const navigate = useNavigate()
    const user = useUser()

    const [sendRegisterRequest] = useRequest(
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

        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                role: '',
                password: '123123123s',
                password_confim: '123123123s',
                lisence: false
            }}
            validationSchema={RegisterSchema}
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
    )
}

export default RegisterPage 
