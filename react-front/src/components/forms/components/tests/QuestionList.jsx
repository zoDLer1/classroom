import css from './css/question-list.module.css'
import Question from 'components/forms/components/tests/components/Question'
import useFormList from 'hooks/forms/useFormList'

const QuestionList = ({ module, mode }) => {

    const { addListItem, getListItem, removeItem } = useFormList(module, 2)

    return (
        <div className={css.block}>
            {module.values.map((item, index) =>
                <Question
                    mode={mode}
                    remove={() => removeItem(index)}
                    isNotRemove={module.values.length > 1}
                    index={index}
                    key={index}
                    isLast={module.values.length-1 === index}
                    add={() => addListItem(index)}
                    {...getListItem(index)}
                />)}
        </div>
    )
}

export default QuestionList