import css from './css/create-class.module.css'
import formCss from 'components/forms/forms.module.css'
import FormInput from './components/inputs/FormInput'
import FormSelect from './components/inputs/FormSelect'
import FormTextArea from './components/inputs/FormTextArea'
import Action from 'components/UI/inputs/Action'
import ClassServise from 'services/ClassSevrice'
import { faPen, faCube, faBan, faPlus } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/useRequest'
import { useState } from 'react'
import { useInitialRequest } from 'hooks/useInitialRequest'
import { Formik, Form } from 'formik'


export function CreateClassForm({ close, handleSubmit }) {

    const [subjects, setSubjects] = useState([])

    useInitialRequest({}, ClassServise.getSubjects, {
        200: (resp) => setSubjects(resp.data)
    })

    return (
        <Form className={[formCss.block, formCss.flex].join(' ')}>
            <div className={[css.inputs, formCss.inputs].join(' ')}>
                <FormInput name='name' icon={faPen} placeholder={'Название'} />
                <FormSelect options={subjects} name='subject' icon={faCube} placeholder={'Предмет'} />
                <div className={css.textarea}>
                    <FormTextArea name='description' placeholder={'Описание'} rows='7' />
                </div>
                <div className={css.actions}>
                    <Action icon={faBan} onClick={close} styleAction={'error'} text={'Отменить'} />
                    <Action icon={faPlus} onClick={handleSubmit} text={'Создать'} />
                </div>
            </div>
        </Form>
    )
}


function CreateClassFormWrapper({ close, addClass }) {

    const [createClassRequest, waitForResponse] = useRequest(
        ClassServise.create,
        {
            201: (response) => {
                addClass(response.data.id, response.data)
                close()
            }

        }
    )

    return (
        <Formik
            initialValues={
                {
                    name: '',
                    subject: '',
                    description: '',
                }
            }
            onSubmit={(values, { setErrors }) => createClassRequest(values, { 400: (response) => setErrors(response.response.data) })}
        >
            {(props) => <CreateClassForm {...props} close={close}/>}
        </Formik>
    )
}


export default CreateClassFormWrapper
