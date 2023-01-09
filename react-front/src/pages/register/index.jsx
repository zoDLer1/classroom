import RegisterForm from 'components/forms/register-form'
import css  from './css/register.module.css'
import PageSection from 'components/pageSection'

export default () => {
    return (
        <PageSection className={css.section}>
             <RegisterForm />
        </PageSection>
        
    )
}