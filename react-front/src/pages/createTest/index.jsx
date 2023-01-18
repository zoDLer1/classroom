import css from './css/createTest.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/test-forms/test-creation-form'


export default () =>  {
    return (
        <PageSection className={css.section}>
           <TestCreationForm />
        </PageSection>
    )
}

