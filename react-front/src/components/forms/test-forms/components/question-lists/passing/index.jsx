import css from '../css/question-list.module.css'
import PassingQuestion from '../../questions/passing'


export default (props) =>  {

    const setQuestion = (id, value) => {
        let newList = [...props.questions]
        let index = newList.findIndex(item => item.id === id)
        newList[index] = value
        props.set(newList)
    }


    return (
        <div className={css.block}>
            <PassingQuestion total={props.questions.length} current={props.question+1} next={props.next} set={setQuestion} data={props.questions[props.question]} />
        </div>
    )
}
