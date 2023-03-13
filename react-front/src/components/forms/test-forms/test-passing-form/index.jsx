import css from '../css/test.module.css'
import QuestionList from '../components/question-lists/passing'
import FormFooter from '../components/footers/passing'
import FormHeader from '../components/headers/passing'
import { useState } from 'react'


export default (props) =>  {



    const submit = () =>{
        console.log(props)
    }

    const [passing, setPassing] = useState({
        stage: 0,
        question: 0,
    })

    const nextStage = () =>{
        setPassing({...passing, stage: passing.stage+1})
    }
    const nextQuestion = () =>{
        setPassing({...passing, question: passing.question+1})
    }


    const next = () =>{
        if (!(passing.question || passing.stage) || props.data.questions.length === passing.question+1){
            nextStage()
        }
        else{
            nextQuestion()
        }
    }

    

    const setQuestions = (questions) => {
        props.set({...props.data, questions: questions})
    }


    const stages = {
        0: <FormHeader name={props.data.name} start={next} description={props.data.description} />,
        1: <QuestionList onSubmit={submit} next={next} set={setQuestions} question={passing.question} questions={props.data.questions} />,
        2: <FormFooter data={props.data} />
    }

    return (
        
        <form  className={[css.block, css.center].join(' ')}>
            {stages[passing.stage]}
            {/* <FormFooter /> */}
        </form>
    )
}
