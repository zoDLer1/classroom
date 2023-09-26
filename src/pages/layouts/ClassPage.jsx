import ClassForm from 'components/forms/ClassForm'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import ClassServise from 'services/ClassSevrice'
import ContentUpper from 'pages/containers/ContentUpper'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormLoader from 'components/forms/FormLoader'
import { useLocation } from 'react-router-dom'
import { useHeaderBack } from 'hooks/globalUI/useGlobalUI'


const ClassLayout = () => {
    const [pages, setPages] = useState([])
    const location = useLocation()


    useEffect(() => {
        setPages([{
            text: 'Задания',
            url: 'tests'
        }])
    }, [])
   
    useHeaderBack([location.pathname], '/classes')
    

    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading] = useInitialRequest(
        {},
        async () => await ClassServise.get(id),
        {
            200: (resp) => {
                if (resp.data.members) {
                    setPages((pages) => [...pages, { text: 'Участники', url: 'members' }])
                    
                }
                if (resp.data.settings) {
                    setPages((pages) => [...pages, { text: 'Настройки', url: 'settings' }])
                }
                setFormatedData(resp.data)
            },
            'bad': () => navigate('/classes')

        }
    )
    const setFormatedData = (data) => {
        const { tests, members, waiters, creator, settings, ...classInfo } = data
        const formatedData = {
            tests,
            members: { members, waiters, creator },
            settings: { settings, ...classInfo }
        }
        setClass(formatedData)
    }




    const [classData, setClass] = useState({})

    return (
        <ContentUpper>
            <div className='flex-vertical gap-3 min-h-58 w-192 px-4 py-5 rounded-2xl box mx-auto'>
                <FormLoader condition={isLoading}>
                    <ClassForm id={id} classData={classData} pages={pages} setFullData={setFormatedData} setClassData={setClass} />
                </FormLoader>
            </div>
        </ContentUpper>
    )
}

export default ClassLayout