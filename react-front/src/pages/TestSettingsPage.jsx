import { Formik, Form } from 'formik'
import { useOutletContext } from 'react-router-dom'
import FormCheckBoxSender from 'components/forms/inputs/senders/FormCheckBoxSender'
import TestsServise from 'services/TestsService'
import useRequest from 'hooks/requests/useRequest'
import { useParams } from 'react-router-dom'
import { TitleBlock } from './ClassSettingsPage'

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
            {() => <Form>
                <TitleBlock title={'Дополнительно'}>
                    <div className='p-5'>
                        <FormCheckBoxSender name='allow_view_answers_after_passing'>
                            <span>Разрешать просматривать ответы</span>
                        </FormCheckBoxSender>
                    </div>
                </TitleBlock>
            </Form>}
        </Formik>

    )
}
