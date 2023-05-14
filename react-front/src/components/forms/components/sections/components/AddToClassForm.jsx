import css from './css/add-to-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Submit from '../../inputs/Submit'
import FormSelect from '../../inputs/FormSelect'
import ClassServise from 'services/ClassSevrice'
import TestsServise from 'services/TestsService'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import useForm from 'hooks/forms/useForm'
import useRequest from 'hooks/useRequest'
import { useNavigate } from 'react-router-dom'


function AddToClassForm({ current, close }) {

    const navigate = useNavigate()

    const AddTestToClass = useRequest(
        async ({ class_ }) => {
            const response = await TestsServise.add_to_class(class_, current.id)
            close()
            navigate('/classes/' + class_)
            return response
        }
    )

    const { getInput, getSubmit } = useForm({
        class_: {
            options: {
                asyncLoadOptions: ClassServise.all
            }
        }
    }, AddTestToClass)

    return (
        <div onClick={(evt) => evt.stopPropagation()} className={[formCss.block, formCss.flex, css.block].join(' ')}>
            <h2 className={css.label}>
                <span>Add test to class</span>
                <span className={css.class_}>{current.name}</span>
            </h2>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <FormSelect {...getInput('class_')} placeholder="Class name" icon={faFile} />
            </div>
            <div className={css.submit}>
                <Submit {...getSubmit()} text='create' />
            </div>
        </div>
    )
}
export default AddToClassForm