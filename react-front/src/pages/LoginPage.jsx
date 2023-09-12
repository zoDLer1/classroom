import LoginForm from 'components/forms/LoginForm'
import useRequest from 'hooks/requests/useRequest'
import { useUser } from 'hooks/store/useUser'
import AuthService from 'services/AuthService'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { SignupSchema } from 'validation/Schemes'



function LoginPage() {


    const user = useUser()
    const navigate = useNavigate()


    const [sendLoginRequest] = useRequest(
        AuthService.login,
        {
            200: (response) => {
                user.authenticate(response.data.user, response.data.access)
                navigate('/classes')
            },
        }
    )

    return (

        <Formik
            initialValues={{
                email: 'kuptsov.valya@gmail.com',
                password: '123123123s'
            }}
            onSubmit={
                async (values, { setSubmitting, setErrors }) => {
                    await sendLoginRequest(values, {
                        401: (response) => setErrors({ email: response.response.data.detail }),
                        400: (response) => setErrors(response.response.data)
                    })
                    setSubmitting(false)
                }
            }
            validationSchema={SignupSchema}
        >
            {LoginForm}
        </Formik>

    )
}
export default LoginPage

