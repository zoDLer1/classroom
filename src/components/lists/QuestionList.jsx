import Question from 'components/lists/items/Question'
import { FieldArray } from 'formik'
import { defaultQuestionValue } from 'pages/CreateTemplatePage'

const QuestionList = ({ values, viewMode }) => {


    return (
        <FieldArray validateOnChange={false} name='questions' render={({ insert, remove, form }) =>
            <div className='flex-vertical gap-10'>
                {
                    values.questions.map((question, index) => <Question
                        data={question}
                        viewMode={viewMode}
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