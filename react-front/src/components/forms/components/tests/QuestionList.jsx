import css from './css/question-list.module.css'
import Question from 'components/forms/components/tests/components/Question'
import { FieldArray } from 'formik'
import { defaultQuestionValue } from 'components/forms/TemplateCreationForm'

const QuestionList = ({ values }) => {


    return (
        <FieldArray validateOnChange={false} name='questions' render={({ insert, remove, form }) =>
            <div className={css.block}>
                {
                    values.questions.map((question, index) => <Question
                        data={question}
                        copy={() => insert(index + 1, question)}
                        index={index}
                        key={index}
                        form={form}
                        add={() => insert(index + 1, defaultQuestionValue)}
                        remove={() => remove(index)}
                    />)
                }

            </div>
        } />

    )
}

export default QuestionList