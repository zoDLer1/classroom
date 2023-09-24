import FormInput from './inputs/FormInput'
import FormSelect from './inputs/FormSelect'
import FormTextArea from './inputs/FormTextArea'
import Action from 'components/UI/inputs/Action'
import ClassServise from 'services/ClassSevrice'
import { faPen, faCube, faBan, faPlus } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/requests/useRequest'
import { useState } from 'react'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { Formik, Form } from 'formik'


export function CreateClassForm({ close, handleSubmit }) {

    const [subjects, setSubjects] = useState([])

    useInitialRequest({}, ClassServise.getSubjects, {
        200: (resp) => setSubjects(resp.data)
    })

    return (
        <Form className='flex-vertical-ic-jc p-10-20 rounded-xl box'>
            <div className='flex-vertical gap-5 w-75'>
                <FormInput name='name' icon={faPen} placeholder={'Название'} />
                <FormSelect options={subjects} name='subject' icon={faCube} placeholder={'Предмет'} />
                <div className='mt-2.5'>
                    <FormTextArea name='description' placeholder={'Описание'} rows='7' />
                </div>
                <div className='flex-ic-je gap-2.5'>
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
            {(props) => <CreateClassForm {...props} close={close} />}
        </Formik>
    )
}


export default CreateClassFormWrapper
