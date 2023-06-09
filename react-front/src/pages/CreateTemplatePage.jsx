import css from './pages.module.css'
import PageSection from 'components/pageSection'
import TestCreationForm from 'components/forms/TemplateCreationForm'
import useRequest from 'hooks/useRequest'
import TestsServise from 'services/TestsService'
import { useNavigate } from 'react-router-dom'
import { faSquarePlus, faBan, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import Action from 'components/UI/inputs/Action'
import footerCss from 'components/forms/components/tests/css/footer.module.css'



const Footer = ({ submit, mode, setMode, navigate }) => {
    const switchMode = () => {
        setMode((mode) => mode !== 'creation' ? 'creation' : 'view')
    }

    return <div className={footerCss.block}>
        <div className={footerCss.group}>
            <Action {...submit()} text={'Создать'} icon={faSquarePlus}></Action>
            <Action onClick={switchMode} text={'Вид'} icon={mode === 'creation' ? faEyeSlash : faEye}></Action>
        </div>
        <Action text={'Отменить'} onClick={()=>navigate('/tests/templates')} styleAction={'error'} icon={faBan}></Action>
    </div>
}

const CreateTemplatePage = () => {

    const navigate = useNavigate()
    const data = {
        name: '',
        description: '',
        questions: []
    }
    const [mode, setMode] = useState('creation')
    const create = useRequest(
        TestsServise.createTemplate,
        {
            201: () => {
                navigate('/tests/templates')
            }
        }
    )

    return (
        <PageSection className={css.section}>
            <TestCreationForm mode={mode} request={create} data={data}>
                <Footer mode={mode} navigate={navigate} setMode={setMode} />
            </TestCreationForm>
        </PageSection>
    )
}

export default CreateTemplatePage