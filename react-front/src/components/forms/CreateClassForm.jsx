import css from './css/create-class.module.css'
import formCss from 'components/forms/css/form.module.css'
import FormInput from './components/inputs/FormInput'
import FormSelect from './components/inputs/FormSelect'
import FormTextArea from './components/inputs/FormTextArea'
import Action from 'components/UI/inputs/Action'
import ClassServise from 'services/ClassSevrice'
import { faPen, faCube, faBan, faPlus } from '@fortawesome/free-solid-svg-icons'
import useForm from 'hooks/forms/useForm'
import useRequest from 'hooks/useRequest'
import { REQUIRED__VALIDATOR } from 'validation/validators'



function CreateClassForm({ close, addClass }) {
    const createClass = useRequest(
        async (data) => await ClassServise.create(data),
        {
            200: (response) => console.log(response),
            400: (response) => handleServerErrors(response.response.data),
            201: (response) => { addClass(response.data); close() }

        }
    )

    const { getInput, handleServerErrors, getSubmit } = useForm({
        name: {
            validators: [REQUIRED__VALIDATOR()]
        },
        subject: {
            validators: [REQUIRED__VALIDATOR()],
            options: {
                asyncLoadOptions: ClassServise.getSubjects
            }
        },
        description: {}
    }, createClass)


    return (
        <div onClick={evt => evt.stopPropagation()} className={[formCss.block, formCss.flex].join(' ')}>
            <div className={css.inputs}>
                <FormInput {...getInput('name')} icon={faPen} placeholder={'Название'} />
                <FormSelect {...getInput('subject')} icon={faCube} placeholder={'Предмет'} />
                <div className={css.textarea}>
                    <FormTextArea {...getInput('description')} placeholder={'Описание'} rows='7' />
                </div>
                <div className={css.actions}>
                    <Action icon={faBan} onClick={close} styleAction={'error'} text={'Отменить'} />
                    <Action icon={faPlus} {...getSubmit()} text={'Создать'} />
                </div>
            </div>

        </div>
    )
}

export default CreateClassForm
