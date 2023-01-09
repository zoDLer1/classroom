import { useState } from 'react'
import css from './css/question-list.module.css'
import Question from './question'


export default (props) =>  {

    // const [questions, setQue] = useState(
    //     [
    //         {name: '', answer_type: {name: 'Text', id: 1}, answer: '', required: true, photos:[]},
    //     ]
    // )

    const setQuestion = (index, value) => {
        let newList = [...props.questions]
        newList[index] = value
        props.set(newList)
    }

    const createQuestion = () => {
        props.set([...props.questions, props.defaultValue])
    }
    const deleteQuestion = (index) => {
        props.set(props.questions.filter((itm, ind) => ind !== index))
    }
    const copyQuestion = (item) => {
        props.set([...props.questions, item])
    }


    return (
        <div className={css.block}>
            {props.questions.map((item, index) => <Question key={index} numb={index} testType={props.testType} copy={copyQuestion} delete={deleteQuestion} set={setQuestion} data={item}/>)}
        </div>
    )
}
