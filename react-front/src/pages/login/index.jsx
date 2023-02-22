import LoginForm from 'components/forms/login-form'
import pagesCss from '../pages.module.css'

export default () => {
    return (
        <div className={pagesCss.content_center}>
            <LoginForm/>
        </div>
    )
}