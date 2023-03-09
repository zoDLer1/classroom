import css from '../css/question-list.module.css'
import Question from 'components/forms/test-forms/components/questions/create'


const CreateQuestionList = ({questionsActions, questions }) =>  {


    


    return (
        <div className={css.block}>
            
            {questions.map((item, index) => 
            <Question 
                key={index} 
                index={index} 
                create={() => questionsActions.createQuestion(index)} 
                copy={(question) => questionsActions.copyQuestion(index, question)} 
                remove={() =>questionsActions.deleteQuestion(index)} 
                set={(question) => questionsActions.setQuestion(index, question)} 
                data={item}
            />)}
        </div>
    )
}

export default CreateQuestionList