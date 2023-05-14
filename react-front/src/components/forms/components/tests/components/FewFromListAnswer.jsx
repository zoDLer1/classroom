import css from './css/few-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import FormCheckBox from 'components/forms/components/inputs/FormCheckBox'
import Action from 'components/UI/inputs/Action'
import useFormModule from 'hooks/forms/useFormModue'
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import useFormList from 'hooks/forms/useFormList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REQUIRED__VALIDATOR } from 'validation/validators'

const FewFromListAnswerItem = ({ index, remove,  options }) => {

    const { getInput } = useFormModule({
        isCorrect: {
            value: false
        },
        name: {
            value: '',
            validators: [REQUIRED__VALIDATOR()]
        }
    }, options)



    return <div className={css.item} >
        <FormCheckBox {...getInput('isCorrect')} />
        <FormInput {...getInput('name')} icon={faPen} placeholder={`Answer ${index + 1}`} />
        <FontAwesomeIcon icon={faXmark} onClick={remove} className={`${css.icon}`} size='lg' />
    </div>
}

const FewFromListAnswer = ({ getModule }) => {
    const module = getModule('answers')
    const { values, getListItem, addItem, removeItem } = useFormList(4, module)
    return (
        <div className={css.list}>
            {values.map((item, index) =>
                <FewFromListAnswerItem remove={() => removeItem(index)} {...getListItem(index)} key={index} index={index} />
            )}
            {values.length < 12 &&
                <div className={[css.item, css.add].join(' ')}>
                    <Action icon={faPlus} onClick={addItem} text='Add answer' />
                </div>

            }

        </div>



    )
}
export default FewFromListAnswer 