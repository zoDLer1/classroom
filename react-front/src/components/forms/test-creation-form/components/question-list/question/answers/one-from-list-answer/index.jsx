import { useState } from 'react'
import Link from 'UI/Link'
import css from './css/one-from-list-answer.module.css'
import RadioButton from 'UI/RadioButton'
import Input from 'UI/Input'

export default (props) =>  {

    const setList = (ar) => {
        props.set(ar)
    }


    const check = (index) =>{
        let newList = [...props.value]
        let indx = props.value.findIndex(item => item.correct)
        newList[indx] = {...newList[indx], correct: false}
        newList[index] = {...newList[index], correct: true}
        setList(newList)
    }

    const changeValue = (index, value) =>{
        let newList = [...props.value]
        newList[index] = {...newList[index], value: value}
        setList(newList)
    }

    const addItem = () => {
        setList([...props.value, {value:'', correct:false}])
    }
    const removeItem = (index) => {
        setList(props.value.filter((item, i) => i !== index))
    }

    return (
        <div className={css.list}>
            {props.value.map((item, index) => 
                <div className={css.item} key={index}>
                    <RadioButton  checked={item.correct} onChange={(evt) => check(index)} text='' name={`question_${props.numb}_answer_radio`} />
                    <Input onChange={(evt) => changeValue(index, evt.target.value)} value={item.value} name={`question_${props.numb}_answer`} placeholder={`Answer ${index+1}`} />
                    <i onClick={()=>removeItem(index)} className={`${css.icon} fa-solid fa-xmark`}></i>
                </div>
            )}

            <div className={[css.item, css.add].join(' ')}>
                <Link onClick={addItem} text='Add answer'>
                    <i className="fa-solid fa-plus"></i>
                </Link>
            </div>
            
        </div>
        
    )
}
