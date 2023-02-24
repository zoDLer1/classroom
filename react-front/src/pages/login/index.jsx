import LoginForm from 'components/forms/login-form'
import pagesCss from '../pages.module.css'


export default ({ router }) => {
 
    return (
        <div className={pagesCss.content_center}>
            <LoginForm onSubmited={() => router.navigate('/classes')} />
        </div>
    )
}