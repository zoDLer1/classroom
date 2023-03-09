import css from '../css/few-from-list-answer.module.css'
import Input from 'UI/Inputs/Input'
import Checkbox from 'UI/Inputs/Checkbox'
import Action from 'UI/Inputs/action'

const FewFromListAnswer = ({value, set, questionIndex}) =>  {


   
    const change = (index, key, newValue) => {
        let newList = [...value]
        let obj = {...newList[index]}
        obj[key] = newValue
        newList[index] = obj
        set(newList)
    }

    
    const addItem = () => {
        set([...value, {name:'', isCorrect: false}])
    }
    const removeItem = (index) => {
        set(value.filter((item, i) => i !== index))
    }



    return (
        <div className={css.list}>
            {value.map((item, index) => 
                <div className={css.item} key={index}>
                    <Checkbox text='' name={`question_${questionIndex}_answer_${index+1}_checkbox`} checked={item.isCorrect} onChange={(evt) => change(index, 'isCorrect', evt.target.checked)}/>
                    <Input placeholderOffset={-15} onChange={(evt) => change(index, 'name', evt.target.value)} value={item.name} name={`question_${questionIndex}_answer${index+1}`} placeholder={`Answer ${index+1}`} />
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
export default FewFromListAnswer 