import { FormNestedFastInput } from '../../inputs/FormInput'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { FieldArray } from 'formik'



const TextAnswer = ({ question, index }) => {
    return <FormNestedFastInput name={`questions.${question}.answers.${index}.value`} placeholder="Введите ответ" icon={faFont} />
}


const TextAnswerList = ({ data, question }) => {
    return <FieldArray name={`questions.${question}.answers`} >
        {({ insert, remove, form }) =>
            data.map((answer, index) => <TextAnswer
                question={question}
                index={index}
                key={index}
            />)
        }
    </FieldArray>



}
export default TextAnswerList