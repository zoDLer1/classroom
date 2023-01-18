import css from '../css/question-list.module.css'
import ViewQuestion from '../../questions/view'


export default (props) =>  {
    return (
        <div className={css.block}>
            {props.questions.map((item, index) => <ViewQuestion  key={index} numb={index} data={item}/>)}
        </div>
    )
}
