import Header from 'components/header'
import RegisterForm from 'components/forms/register-form'

export default () => {
    return (
        <div className='page-root'>
            <Header />
            <div class="page__section register-form-section">
                <RegisterForm />
            </div>
            
        </div>

    )
}