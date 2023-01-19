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
            <PassingQuestion next={props.next} set={setQuestion} data={props.questions[props.question]} />
            {/* {props.questions.map((item) => <PassingQuestion set={setQuestion} key={item.id} data={item}/>)} */}
        </div>
    )
}
