import pagesCss from './pages.module.css'
import ClassForm from 'components/forms/ClassForm'
import { useInitialRequest } from 'hooks/useInitialRequest'
import ClassServise from 'services/ClassSevrice'
import FormLoader from 'components/forms/formLoader'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ClassPage = () => {

    const [pages, setPages] = useState({
        tests: 'Задания',
    })

    const navigate = useNavigate()
    const { id } = useParams()
    const [isLoading] = useInitialRequest(
        {},
        async () => ClassServise.get(id),
        {
            200: (resp) => {
                if (resp.data.members){
                    setPages((pages)=> ({...pages, members: 'Участники'}))
                }
                if (resp.data.settings){
                    setPages((pages)=> ({...pages, settings: 'Настройки'}))
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

        <div className={pagesCss.content_up_100_down_200}>
            <FormLoader condition={isLoading}>
                <ClassForm id={id} classData={classData} pages={pages} setFullData={setFormatedData}  setClassData={setClass} />
            </FormLoader>
        </div>


    )
}

export default ClassPage