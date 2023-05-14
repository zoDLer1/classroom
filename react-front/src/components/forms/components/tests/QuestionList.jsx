import css from './css/question-list.module.css'
import Question from 'components/forms/components/tests/components/Question'
import useFormList from 'hooks/forms/useFormList'

const QuestionList = ({ getModule }) => {

    const module = getModule('questions')

    const { values, getListItem } = useFormList(2, module)

    
    
    return (
        <div className={css.block}>
            {/* {JSON.stringify(errors)} */}
            {values.map((item, index) =>
                <Question
                    key={index}
                    {...getListItem(index)}
                />)}
        </div>
    )
}

export default QuestionList