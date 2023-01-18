import css from '../css/one-from-list-answer.module.css'
import RadioButton from 'UI/RadioButton'


export default (props) =>  {


    return (
        <div className={css.view}>
            {props.value.map((item, index) => 
                <div className={css.item} key={index}>
                    <RadioButton checked={item.correct} readOnly text='' name={`question_${props.numb}_answer_radio`} />
                    <h3 className={css.label}>{item.value}</h3>
                </div>
            )}            
        </div>
        
    )
}
