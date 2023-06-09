import Action from 'components/UI/inputs/Action'
import css from './css/one-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import useFormModule from 'hooks/forms/useFormModue'
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import useFormList from 'hooks/forms/useFormList'
import FormCheckBox from 'components/forms/components/inputs/FormCheckBox'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useState } from 'react'
import CheckBox from 'components/UI/inputs/CheckBox'

const OneFromListAnswerItem = ({ correct_answers, passed_answers, isNotRemove, mode, index, setChecked, remove, checked, value, error, isSubmited, validationMethods }) => {

    const is_correct = Boolean(correct_answers.filter(answer => answer.id === value.id).length)
    const is_passed = Boolean(passed_answers.filter(answer => answer.answer === value.id).length)
    const { getInput, setInputValue } = useFormModule({
        id: {
            value: value.id || null,
            isOptional: true
        },
        isCorrect: {
            value: value.isCorrect || is_correct
        },
        name: {
            value: '' || value.name,
            validators: [REQUIRED__VALIDATOR()]
        }
    }, { validationMethods, isSubmited })
    let style = 'disabled'
    if (is_correct && is_passed) {
        style = 'correct'
    }
    else if (is_correct) {
        style = 'default'
    }
    else if (is_passed && !is_correct){
        style = 'error'
    }

    const isCorrectInput = getInput('isCorrect')
    const inputName = getInput('name')
    const viewConditions = {
        creation: <div className={css.item} >
            <FormCheckBox {...isCorrectInput} />
            <FormInput {...inputName} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
            {isNotRemove && <FontAwesomeIcon onClick={remove} icon={faXmark} className={`${css.icon}`} size='lg'></FontAwesomeIcon>}
        </div>,
        view: <div className={css.item} >
            <CheckBox checkboxSlyle={style} checked={isCorrectInput.value || is_passed} readOnly>
                <h3 className={css.label}>{inputName.value}</h3>
            </CheckBox>
        </div>,
        pass: <div className={css.item} >
            <FormCheckBox  {...isCorrectInput}>
                <h3 className={css.label}>{inputName.value}</h3>
            </FormCheckBox>
        </div>
    }

    useEffect(() => {
        if (isCorrectInput.value) {
            setChecked(index)
        }
    }, [isCorrectInput.value])

    useEffect(() => {
        if (checked !== undefined && checked !== index) {
            setInputValue('isCorrect', false)
        }
    }, [checked])

    return viewConditions[mode]
}

const OneFromListAnswer = ({ mode, passed_answers, correct_answers, module }) => {

    const { getListItem, removeItem, addListItem } = useFormList(module, 4, mode === 'creation')
    const [checked, setChecked] = useState()




    return (
        <div className={css.list}>
            {module.values.map((item, index) =>
                <OneFromListAnswerItem index={index} mode={mode} passed_answers={passed_answers} correct_answers={correct_answers} isNotRemove={module.values.length >= 2} remove={() => removeItem(index)} setChecked={setChecked} checked={checked} {...getListItem(index)} key={index} />
            )}
            {(module.values.length < 12 && mode == 'creation') &&
                <div className={[css.item, css.add].join(' ')}>
                    <Action icon={faPlus} onClick={() => addListItem()} text='Add answer' />
                </div>
            }

        </div>

    )
}
export default OneFromListAnswer