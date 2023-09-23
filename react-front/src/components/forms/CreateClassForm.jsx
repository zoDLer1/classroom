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
        <Form className='flex items-center justify-center flex-col px-20 py-10 bg-white rounded-[55px] shadow-70_20'>
            <div className='flex flex-col gap-5 w-[310px]'>
                <FormInput name='name' icon={faPen} placeholder={'Название'} />
                <FormSelect options={subjects} name='subject' icon={faCube} placeholder={'Предмет'} />
                <div className='mt-[10px]'>
                    <FormTextArea name='description' placeholder={'Описание'} rows='7' />
                </div>
                <div className='flex items-center gap-[10px] justify-end'>
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
