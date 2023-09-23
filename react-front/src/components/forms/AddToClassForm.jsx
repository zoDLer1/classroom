import Submit from 'components/forms/inputs/Submit'
import FormSelect from 'components/forms/inputs/FormSelect'
import ClassServise from 'services/ClassSevrice'
import TestsServise from 'services/TestsService'
import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import useRequest from 'hooks/requests/useRequest'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { useNavigate } from 'react-router-dom'



function AddToClassForm({ current, close }) {

    const navigate = useNavigate()
    const [addTestToClassRequest] = useRequest(TestsServise.add_to_class,
        {
            201: (_, { _class }) => {
                close()
                navigate(`/classes/${_class}/tests`)
            }
        }
    )
    const [classes, setClasses] = useState([])

    useInitialRequest({}, ClassServise.all, {
        200: (response) => {
            setClasses(response.data)
        }
    })

    return (
        <Formik
            initialValues={
                { _class: '' }
            }
            onSubmit={async (values, form) => {
                await addTestToClassRequest({ ...values, template: current.id })
                form.setSubmitting(false)
            }}
        >
            {({ isSubmitting }) => {


                return <Form className='w-[475px] flex items-center justify-center flex-col px-20 py-10 bg-white rounded-[55px] shadow-70_20'>
                    <h2 className='text-primary text-2xl font-semibold mb-10'>
                        <span className='overflow-hidden text-ellipsis max-w-[285px] whitespace-nowrap block'>{current.name}</span>
                    </h2>
                    <div className='w-11/12 mb-8'>
                        <FormSelect options={classes} name='_class' placeholder="Класс" icon={faFile} />
                    </div>
                    <div className='w-full'>
                        <Submit loading={isSubmitting} icon={faPaperPlane} text='Создать' />
                    </div>
                </Form>
            }
            }
        </Formik>
    )
}


export default AddToClassForm