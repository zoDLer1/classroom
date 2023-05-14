import LoginForm from 'components/forms/LoginForm'
import pagesCss from './pages.module.css'


function LoginPage () {
    return (
        <div className={pagesCss.content_center}> 
            <LoginForm />
        </div>
    )
}
export default LoginPage

