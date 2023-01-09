import LoginForm from 'components/forms/login-form'
import PageSection from 'components/pageSection'
import css from './css/login.module.css'

export default () => {
    return (
        <PageSection className={css.section}>
            <LoginForm/>
        </PageSection>
    )
}