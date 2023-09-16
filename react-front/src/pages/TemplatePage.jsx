import css from './pages.module.css'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { useNavigate, useParams } from 'react-router-dom'
import TestsServise from 'services/TestsService'
import { useState } from 'react'
import { faPen, faTrash, faAngleLeft, faSpinner, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Action from 'components/UI/inputs/Action'
import useRequest from 'hooks/requests/useRequest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import { TemplateCreationSchema } from 'validation/Schemes'
import { useHeaderBack } from 'hooks/globalUI/useGlobalUI'
import ContentCenter from './containers/ContentCenter'


const TemplatePage = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const [updateTemplateRequest] = useRequest(
        async (data) => await TestsServise.updateTemplate(id, data),
        {
            200: () => navigate('/tests/templates'),
        }
    )

    const [data, setData] = useState(null)
    useInitialRequest(
        id,
        TestsServise.getTemplate,
        {
            200: (resp) => {
                setData(resp.data)
            },
            404: () => navigate('/tests/templates')
        }
    )
    return (
        <ContentCenter>
            {data &&
                <Formik
                    validationSchema={TemplateCreationSchema}
                    validateOnChange={false}
                    validateOnMount={false}
                    initialValues={data}
                    onSubmit={updateTemplateRequest}
                >
                    {(form) => <TestCreationForm initialViewMode={true} {...form} />}
                </Formik>
            }

        </ContentCenter>
    )
}

export default TemplatePage