import Action from 'UI/Inputs/action'
import css from '../css/one-from-list-answer.module.css'
import RadioButton from 'UI/RadioButton'
import Input from 'UI/Inputs/Input'

const CreateOneFromListAnswer = ({questionIndex, set, value}) =>  {

    const check = (index) =>{
        let newList = [...value]
        let indx = value.findIndex(item => item.isCorrect)
        newList[indx] = {...newList[indx], isCorrect: false}
        newList[index] = {...newList[index], isCorrect: true}
        set(newList)
    }
    const changeValue = (index, newValue) =>{
        let newList = [...value]
        newList[index] = {...newList[index], name: newValue}
        set(newList)
    }
    const addItem = () => {
        set([...value, {name:'', isCorrect:false}])
    }
    const removeItem = (index) => {
        set(value.filter((item, i) => i !== index))
    }


    return (
        <div className={css.list}>
            {value.map((item, index) => 
                <div className={css.item} key={index}>
                    <RadioButton checked={item.isCorrect} onChange={() => check(index)} text='' name={`question_${questionIndex}_answer_radio`} />
                    <Input placeholderOffset={-15} onChange={(evt) => changeValue(index, evt.target.value)} value={item.name} name={`question_${questionIndex}_answer`} placeholder={`Answer ${index+1}`} />
                    <i onClick={()=>removeItem(index)} className={`${css.icon} fa-solid fa-xmark`}></i>
                </div>
            )}
            {value.length < 12 &&
                <div className={[css.item, css.add].join(' ')}>
                    <Action icon={"fa-solid fa-plus"} onClick={addItem} text='Add answer' />
                </div>
            }
            
        </div>
        
    )
}
export default CreateOneFromListAnswer