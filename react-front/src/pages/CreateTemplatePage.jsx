import css from './pages.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import TestsServise from 'services/TestsService'
import { useNavigate } from 'react-router-dom'
import useTestCreation from 'hooks/useTestCreation'

const CreateTest = () =>  {
 

    
    return (
        <PageSection className={css.section}>
           <TestCreationForm  />
        </PageSection>
    )
}

export default CreateTest