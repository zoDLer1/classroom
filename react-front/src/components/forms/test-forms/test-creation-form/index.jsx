import css from '../css/test.module.css'
import FormHeader from 'components/forms/test-forms/components/headers/create'
import QuestionList from 'components/forms/test-forms/components/question-lists/create'
import FormFooter from 'components/forms/test-forms/components/footers/create'



const TestCreationForm = ({ hook, submit, defaultQuestionValue }) =>  {
    

    const [formData, setData, {setHeaderItem}, {setQuestions, ...questionsActions}] = hook
    

   
    

    return (
        <div className={css.block}>
            
            <FormHeader header={formData.header} setHeaderItem={setHeaderItem} />
            <QuestionList questions={formData.questions} questionsActions={questionsActions} defaultValue={defaultQuestionValue}/>
            <FormFooter submit={()=>submit(formData)} />
            
        </div>
    )
}

export default TestCreationForm