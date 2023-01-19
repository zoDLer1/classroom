import css from '../css/few-from-list-answer.module.css'
import Checkbox from 'UI/Checkbox'


export default (props) =>  {


    return (
        <div className={css.view}>
            {props.value.map((item, index) => 
                <div className={css.item} key={index}>
                    <Checkbox text='' name={`question_${props.numb}_answer_${index+1}_checkbox`} checked={item.correct} readOnly />
                    <h3 className={css.label}>{item.value}</h3>
                    
                </div>
            )}
        </div>
        
        
        
    )
}
