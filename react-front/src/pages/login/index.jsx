import LoginForm from 'components/forms/login-form'
import pagesCss from '../pages.module.css'


function Login ({ router }) {
 
    return (
        <div className={pagesCss.content_center}>
            <LoginForm  />
        </div>
    )
}
export default Login