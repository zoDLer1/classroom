import css from './css/few-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import FormCheckBox from 'components/forms/components/inputs/FormCheckBox'
import Action from 'components/UI/inputs/Action'
import useFormModule from 'hooks/forms/useFormModue'
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import useFormList from 'hooks/forms/useFormList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import CheckBox from 'components/UI/inputs/CheckBox'


const FewFromListAnswerItem = ({ correct_answers, passed_answers, mode, index, value, remove, isNotRemove, error, isSubmited, validationMethods }) => {


    const is_correct = Boolean(correct_answers.filter(answer => answer.id === value.id).length)
    const is_passed = Boolean(passed_answers.filter(answer => answer.answer === value.id).length)

    const { getInput } = useFormModule({
        id: {
            value: value.id || null,
            isOptional: true
        },
        isCorrect: {
            value: value.isCorrect || is_correct
        },
        name: {
            value: value.name || '',
            validators: [REQUIRED__VALIDATOR()]
        }
    }, { validationMethods, isSubmited })

    const inputName = getInput('name')
    const isCorrectInput = getInput('isCorrect')


    let style = 'disabled'
    if (is_correct && is_passed) {
        style = 'correct'
    }
    else if (is_correct) {
        style = 'default'
    }
    else if (is_passed && !is_correct && correct_answers.length){
        style = 'error'
    }

    const viewConditions = {
        creation: <div className={css.item} >
            <FormCheckBox {...isCorrectInput} />
            <FormInput {...inputName} icon={faPen} placeholder={`Введите ответ ${index + 1}`} />
            {isNotRemove && <FontAwesomeIcon icon={faXmark} onClick={remove} className={`${css.icon}`} size='lg' />}

        </div>,
        view: <div className={css.item} >
            <CheckBox checkboxSlyle={style} checked={isCorrectInput.value || is_passed} readOnly>
                <h3 className={css.label}>{inputName.value}</h3>
            </CheckBox>
        </div>,
        pass: <div className={css.item} >
            <FormCheckBox {...isCorrectInput}>
                <h3 className={css.label}>{inputName.value}</h3>
            </FormCheckBox>
        </div>
    }
    return viewConditions[mode]
}

const FewFromListAnswer = ({ module, mode, passed_answers, correct_answers }) => {

    const { getListItem, addListItem, removeItem } = useFormList(module, 4, mode === 'creation')

    return (
        <div className={css.list}>
            {module.values.map((item, index) =>
                <FewFromListAnswerItem mode={mode} passed_answers={passed_answers} correct_answers={correct_answers} {...getListItem(index)} isNotRemove={module.values.length >= 2} remove={() => removeItem(index)} key={index} index={index} />
            )}
            {(module.values.length < 12 && mode == 'creation') &&
                <div className={[css.item, css.add].join(' ')}>
                    <Action icon={faPlus} onClick={() => addListItem()} text='Add answer' />
                </div>
            }

        </div>



    )
}
export default FewFromListAnswer 