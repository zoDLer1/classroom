import Header from 'components/header'
import LoginForm from 'components/forms/login-form'
import './css/main.css'

export default () => {
    return (
        <div className='page-root'>
            <Header />
            <div class="page__section login-form-section">
                <LoginForm />
            </div>
            
        </div>

    )
}