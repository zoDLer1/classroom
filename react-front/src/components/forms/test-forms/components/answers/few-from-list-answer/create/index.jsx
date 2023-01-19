import css from '../css/few-from-list-answer.module.css'
import Input from 'UI/Input'
import Checkbox from 'UI/Checkbox'
import Link from 'UI/Link'

export default (props) =>  {


    // const setList = (ar) =>{
    //     props.set(ar)
    // }


    const change = (index, key, value) => {
        let newList = [...props.value]
        let obj = {...newList[index]}
        obj[key] = value
        newList[index] = obj
        props.set(newList)
    }

    
    const addItem = () => {
        props.set([...props.value, {value:'', correct: false}])
    }
    const removeItem = (index) => {
        props.set(props.value.filter((item, i) => i !== index))
    }



    return (
        <div className={css.list}>
            {props.value.map((item, index) => 
                <div className={css.item} key={index}>
                    <Checkbox text='' name={`question_${props.numb}_answer_${index+1}_checkbox`} checked={item.correct} onChange={(evt) => change(index, 'correct', evt.target.checked)}/>
                    <Input onChange={(evt) => change(index, 'value', evt.target.value)} value={item.value} name={`question_${props.numb}_answer${index+1}`} placeholder={`Answer ${index+1}`} />
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


// const changeValue = (index, value) =>{
    //     let newList = [...props.value]
    //     newList[index] = {...newList[index], value: value}
    //     setList(newList)
    // }
    // const changeCorrect = (index, value) =>{
    //     let newList = [...props.value]
    //     newList[index] = {...newList[index], correct: value}
    //     setList(newList)
    // }
