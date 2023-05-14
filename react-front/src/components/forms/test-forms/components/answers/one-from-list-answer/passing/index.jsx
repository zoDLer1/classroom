import css from '../css/one-from-list-answer.module.css'
import RadioButton from 'UI/RadioButton'


export default (props) => {
    const check = (id) => {
        let newList = [...props.value]
        let indx = props.value.findIndex(item => item.isCorrect)
        let index = props.value.findIndex(item => id === item.id)
        newList[indx] = { ...newList[indx], isCorrect: false }
        newList[index] = { ...newList[index], isCorrect: true }
        props.set(newList)
    }

    return (
        <div className={css.view}>
            {props.value.map((item) =>
                <div className={css.item} key={item.id}>
                    <RadioButton onChange={() => check(item.id)} text='' name={`question_${props.questionId}_answer_radio`} />
                    <h3 className={css.label}>{item.value}</h3>
                </div>
            )}
        </div>

    )
}
