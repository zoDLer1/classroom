import css from './pages.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import { useInitialRequest } from 'hooks/useInitialRequest'
import { useNavigate, useParams } from 'react-router-dom'
import TestsServise from 'services/TestsService'
import { useState } from 'react'
import footerCss from 'components/forms/components/tests/css/footer.module.css'
import { faPen, faTrash, faAngleLeft, faSpinner, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Action from 'components/UI/inputs/Action'
import useRequest from 'hooks/useRequest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const Footer = ({ deleteRequest, updateLoading, navigate, submit, isEdited, mode }) => {
    const [remove, loading] = deleteRequest
    return <div className={footerCss.block}>
        <div className={footerCss.group}>
            {isEdited}
            {(loading || updateLoading) && <FontAwesomeIcon size='lg' color='var(--primary-color)' icon={faSpinner} spinPulse />}
            {mode === 'creation'
                ? <Action text={'Сохранить'} {...submit()} icon={faFloppyDisk}></Action>
       
                : <>
                    <Action text={'Изменить'} onClick={() => navigate('#edit')} icon={faPen}></Action>
                    <Action text={'Удалить'} onClick={remove} styleAction={'error'} icon={faTrash}></Action>
                </>
            }


        </div>
        <Action text={'Назад'} onClick={() => navigate('/tests/templates')} icon={faAngleLeft}></Action>

    </div>
}


const TemplatePage = () => {

    const [mode, setMode] = useState('view')
    const navigate = useNavigate()
    const { hash } = useLocation()

    useEffect(() => {


        if (hash === "#view") {
            setMode('view')
        }
        else if (hash === "#edit") {
            setMode('creation')
        }
        else {
            navigate('#view')
        }

        console.log(hash)
    }, [hash])

    const { id } = useParams()
    const deleteRequest = useRequest(
        async () => await TestsServise.deteleTemplate(id),
        {
            204: () => navigate('/tests/templates'),
        }
    )
    const updateTemplateRequest = useRequest(
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
            200: (resp) => setData(resp.data),
            404: () => navigate('/tests/templates')
        }
    )
    return (
        <PageSection className={css.section}>
            {data && <TestCreationForm request={updateTemplateRequest} mode={mode} data={data}>

                <Footer navigate={navigate} updateLoading={updateTemplateRequest[1]} mode={mode} deleteRequest={deleteRequest} />
            </TestCreationForm>}

        </PageSection>
    )
}

export default TemplatePage