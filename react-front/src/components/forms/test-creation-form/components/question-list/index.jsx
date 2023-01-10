import { useState } from 'react'
import css from './css/question-list.module.css'
import Question from './question'


export default (props) =>  {
    const setQuestion = (index, value) => {
        let newList = [...props.questions]
        newList[index] = value
        props.set(newList)
    }

    const createQuestion = (index) => {
        props.set([...[...props.questions].splice(0, index+1), props.defaultValue, ...[...props.questions].slice(index+1)])
        
    }
    const deleteQuestion = (index) => {
        props.set(props.questions.filter((itm, ind) => ind !== index))
    }
    const copyQuestion = (index, item) => {
        console.log(item)
        props.set([...[...props.questions].splice(0, index), item, ...[...props.questions].slice(index)])
    }
    


    return (
        <div className={css.block}>
            {props.questions.map((item, index) => <Question  key={index} numb={index} testType={props.testType} timeInfo={props.timeInfo} create={createQuestion} copy={copyQuestion} delete={deleteQuestion} set={setQuestion} data={item}/>)}
        </div>
    )
}
