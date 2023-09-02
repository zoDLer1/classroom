import LoginForm from 'components/forms/LoginForm'
import MainLayout from 'layouts/MainLayout'
import useRequest from 'hooks/useRequest'
import { useUser } from 'hooks/user/useUser'
import AuthService from 'services/AuthService'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле')
});


function LoginPage() {


    const user = useUser()
    const navigate = useNavigate()


    const [sendLoginRequest, waitForResponse] = useRequest(
        AuthService.login,
        {
            200: (response) => {
                user.authenticate(response.data.user, response.data.access)
                navigate('/classes')
            },
        }
    )

    return (
        <MainLayout>
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
        </MainLayout>
    )
}
export default LoginPage

