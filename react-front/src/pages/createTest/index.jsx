import css from './css/createTest.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/test-forms/test-creation-form'
import TestsServise from 'services/TestsService'
import { useNavigate } from 'react-router-dom'
import useTestCreation from 'hooks/useTestCreation'

const CreateTest = () =>  {
    const navigate = useNavigate()
    const Submit = async (formData) =>{
        
        console.log(formData)
        await TestsServise.create({...formData.header, type: formData.header.type.id, questions: formData.questions})
        navigate('/tests')

    }
    const defaultQuestionValue = {name: '', type: 1, time: '',  answers: [{name: '', value: '', isCorrect: true}], required: false, photos:[]}
    const defaultData = {
        header:{
            name: '', 
            description: '', 
            time: '', 
            type: {
                name: 'Simple', 
                id: 1
            }
        }, 
        questions: [
            defaultQuestionValue, 
            defaultQuestionValue
        ]
    }
    const hook = useTestCreation(defaultData, defaultQuestionValue)

    
    return (
        <PageSection className={css.section}>
           <TestCreationForm hook={hook} defaultQuestionValue={defaultQuestionValue} submit={Submit} />
        </PageSection>
    )
}

export default CreateTest