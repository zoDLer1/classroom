import LoginForm from 'components/forms/login-form'
import pagesCss from '../pages.module.css'
import AuthService from 'services/AuthService'

import { useNavigate } from 'react-router-dom'



function Login () {
    
    const navigate = useNavigate()
    const onFormSubmit = async (formData) => {
        await AuthService.auth(
            (response) => {
                if (response.status === 200){
                    navigate('/classes')
                }
                
            },
            (error) => {
                if (error.code === 'ERR_NETWORK'){
                    navigate('/serverunavailable')
                }
                
            },
            {email: formData.email.value, password: formData.password.value}
            )
    }

    return (
        <div className={pagesCss.content_center}>
            <LoginForm onSubmit={onFormSubmit} />
        </div>
    )
}
export default Login