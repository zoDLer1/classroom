import css from './css/settings.module.css'
import { Formik, Form } from 'formik'
import { useOutletContext } from 'react-router-dom'
import FormCheckBoxSender from 'components/forms/inputs/senders/FormCheckBoxSender'
import TestsServise from 'services/TestsService'
import useRequest from 'hooks/requests/useRequest'
import { useParams } from 'react-router-dom'

export default function TestSettingsPage() {

    const { id } = useParams()
    const [update] = useRequest(async (data) => await TestsServise.update(id, data))
    const { data } = useOutletContext()




    return (
        <Formik
            onSubmit={async (values, form) => {
                await update({ settings: values })
                form.setSubmitting(false)
            }}
            initialValues={data}>
            {() => <Form className={css.sections}>
                <div className={css.main}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Дополнительно</p>
                    </div>
                    <div className={css.additionally}>
                        <FormCheckBoxSender name='allow_view_answers_after_passing'>
                            <span>Разрешать просматривать ответы</span>
                        </FormCheckBoxSender>
                    </div>
                </div>
            </Form>}
        </Formik>

    )
}
