import Action from 'components/UI/inputs/Action'
import css from './css/one-from-list-answer.module.css'
import FormInput from 'components/forms/components/inputs/FormInput'
import useFormModule from 'hooks/forms/useFormModue'
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import useFormList from 'hooks/forms/useFormList'
import FormCheckBox from 'components/forms/components/inputs/FormCheckBox'
import { REQUIRED__VALIDATOR } from 'validation/validators'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OneFromListAnswerItem = ({ index, remove, options }) => {

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
        <FontAwesomeIcon onClick={remove} icon={faXmark} className={`${css.icon}`} size='lg'></FontAwesomeIcon>
    </div>
}

const OneFromListAnswer = ({ getModule }) => {

    const { values, getListItem, addItem, removeItem } = useFormList(4, getModule('answers'))

    return (
        <div className={css.list}>
            {values.map((item, index) =>
                <OneFromListAnswerItem index={index} remove={() => removeItem(index)} {...getListItem(index)} key={index} />
            )}
            {values.length < 12 &&
                <div className={[css.item, css.add].join(' ')}>
                    <Action icon={faPlus} onClick={addItem} text='Add answer' />
                </div>
            }

        </div>

    )
}
export default OneFromListAnswer