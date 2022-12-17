import Header from 'components/header'
import LoginForm from 'components/forms/login-form'

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