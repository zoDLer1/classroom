import RegisterForm from 'components/forms/RegisterForm'
import pagesCss from './pages.module.css'

function Register() {
    return (
        <div className={pagesCss.content_center}>
            <RegisterForm />
        </div>
    )
}

export default Register 
