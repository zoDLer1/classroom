import css from './css/add-to-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
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


                return <Form className={[formCss.block, formCss.flex, css.block].join(' ')}>
                    <h2 className={css.label}>
                        <span className={css.class_}>{current.name}</span>
                    </h2>
                    <div className={[formCss.inputs, css.inputs].join(' ')}>
                        <FormSelect options={classes} name='_class' placeholder="Класс" icon={faFile} />
                    </div>
                    <div className={css.submit}>
                        <Submit loading={isSubmitting} icon={faPaperPlane} text='Создать' />
                    </div>
                </Form>
            }
            }
        </Formik>
    )
}


export default AddToClassForm