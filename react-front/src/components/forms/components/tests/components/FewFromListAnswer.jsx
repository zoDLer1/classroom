import css from './css/few-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FieldArray } from 'formik'
import { defaultManyAnswer } from 'components/forms/TemplateCreationForm'
import { FormFastCheckBox } from 'components/forms/components/inputs/FormCheckBox'


const FewFromListAnswerItem = ({ question, add, remove, index }) => {

   
    return <div className={css.item} >
        <FormFastCheckBox name={`questions.${question}.answers.${index}.isCorrect`} />
        <FormInput name={`questions.${question}.answers.${index}.name`} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
        <div className={css.actions}>
            <FontAwesomeIcon icon={faSquarePlus} onClick={add} className={[css.icon, css.add].join(' ')} size='lg'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faXmark} onClick={remove} className={[css.icon, css.remove].join(' ')} size='lg'></FontAwesomeIcon>
        </div>
    </div>
}

const FewFromListAnswer = ({ data, question }) => {

    return <FieldArray name={`questions.${question}.answers`} render={({ insert, remove, form }) =>
        <div className={css.list}>
            {
                data.map((answer, index) => <FewFromListAnswerItem
                    add={() => insert(index + 1, defaultManyAnswer)}
                    remove={() => remove(index)}
                    data={answer}
                    form={form}
                    question={question}
                    index={index}
                    key={index}
                />)
            }
        </div>
    }
    >
    </FieldArray>
}
export default FewFromListAnswer 