import ClassForm from 'components/forms/ClassForm'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import ClassServise from 'services/ClassSevrice'
import ContentUpper from 'pages/containers/ContentUpper'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormLoader from 'components/forms/FormLoader'


const ClassLayout = () => {

    const [pages, setPages] = useState([
        {
            text: 'Задания',
            url: 'tests'
        }
    ])

    const addItem = (index, item) => {
        setPages((pages) => {
            const newPages = [...pages]
            newPages[index] = item
            return newPages
        })
    }
    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading] = useInitialRequest(
        {},
        async () => await ClassServise.get(id),
        {
            200: (resp) => {
                if (resp.data.members) {
                    addItem(1, { text: 'Участники', url: 'members' })
                }
                if (resp.data.settings) {
                    addItem(2, { text: 'Настройки', url: 'settings' })
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