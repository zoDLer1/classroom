import css from '../css/test.module.css'
import QuestionList from '../components/question-lists/passing'
import FormFooter from '../components/footers/view'
import FormHeader from '../components/headers/passing'
import { useState } from 'react'


export default (props) =>  {

    
    const [passing, setPassing] = useState({
        isPassing: false,
        question: 0,
    })
    const startPassing = () =>{
        setPassing({...passing, isPassing: true})
    }

    const nextQuestion = () =>{
        setPassing({...passing, question: passing.question+1})
    }

    const setQuestions = (questions) => {
        props.set({...props.data, questions: questions})
    }

    return (
        
        <form  className={[css.block, css.center].join(' ')}>
            {/* {JSON.stringify(props.data.questions[0])} */}
            
            {!passing.isPassing 
            ? <FormHeader name={props.data.name} start={startPassing} description={props.data.description} />
            : <QuestionList next={nextQuestion} set={setQuestions} question={passing.question} questions={props.data.questions} />
            }
            {/* <FormHeader name={props.data.name} description={props.data.description} />
            <QuestionList set={setQuestions}  questions={props.data.questions} /> */}
            
            
            {/* <FormFooter />     */}
        </form>
    )
}
