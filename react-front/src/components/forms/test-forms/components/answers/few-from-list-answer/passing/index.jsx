import css from '../css/few-from-list-answer.module.css'
import CheckBox from 'components/UI/inputs/CheckBox'


export default (props) =>  {


    const changeCorrect = (id, value) =>{    
        let newList = [...props.value]
        let index = newList.findIndex(item => item.id === id)
        newList[index] = {...newList[index], correct: value}
        props.set(newList)
    }

    return (
        <div className={css.view}>
            {props.value.map((item) => 
                <div className={css.item} key={item.id}> 
                    <CheckBox text='' name={`question_${props.questionId}_answer_${item.id}_checkbox`} onChange={(evt) => changeCorrect(item.id, evt.target.checked)} checked={item.correct} readOnly />
                    <h3 className={css.label}>{item.value}</h3>
                </div>
            )}
        </div>
        
        
        
    )
}
