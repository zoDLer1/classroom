import css from './css/one-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FieldArray } from 'formik'
import { defaultManyAnswer } from 'components/forms/TemplateCreationForm'
import classNames from 'classnames/bind'
import { FormFastCheckBox } from '../../inputs/FormCheckBox'

const cx = classNames.bind(css)

const OneFromListAnswerItem = ({ index, question, setOne, add, remove }) => {




    return (
        <div className={css.item} >
            <FormFastCheckBox
                type='circle'
                name={`questions.${question}.answers.${index}.isCorrect`}
                onCustomChange={() => setOne(index)}
            ></FormFastCheckBox>
            <FormInput name={`questions.${question}.answers.${index}.name`} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
            <div className={css.actions}>
                <FontAwesomeIcon icon={faSquarePlus} onClick={add} className={[css.icon, css.add].join(' ')} size='lg'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faXmark} onClick={remove} className={[css.icon, css.remove].join(' ')} size='lg'></FontAwesomeIcon>
            </div>
        </div>
    )
}

const OneFromListAnswer = ({ form, question, data }) => {


    const setOne = (index) => {
        const newData = [...data]
        for (let i = 0; i < newData.length; i++) {
            newData[i] = { ...newData[i], isCorrect: index === i }
        }
        form.setFieldValue(`questions.${question}.answers`, newData)
    }

    return <FieldArray validateOnChange={false} name={`questions.${question}.answers`} render={({ insert, remove, form }) =>
        <div className={css.list}>
            {
                data.map((answer, index) => <OneFromListAnswerItem
                    data={answer}
                    form={form}
                    add={() => insert(index + 1, defaultManyAnswer)}
                    remove={() => remove(index)}
                    setOne={setOne}
                    question={question}
                    index={index}
                    key={index}
                />)
            }
        </div>
    }
    >
    </FieldArray>


    // return (

    //     <div className={css.list}>
    //         {module.values.map((item, index) =>
    //             <OneFromListAnswerItem index={index} mode={mode} passed_answers={passed_answers} correct_answers={correct_answers} isNotRemove={module.values.length >= 2} remove={() => removeItem(index)} setChecked={setChecked} checked={checked} {...getListItem(index)} key={index} />
    //         )}
    //         {(module.values.length < 12 && mode == 'creation') &&
    //             <div className={[css.item, css.add].join(' ')}>
    //                 <Action icon={faPlus} onClick={() => addListItem()} text='Add answer' />
    //             </div>
    //         }

    //     </div>

    // )
}
export default OneFromListAnswer