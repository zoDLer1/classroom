import pagesCss from './pages.module.css'
import ClassForm from 'components/forms/ClassForm'
import { useState } from 'react'
import Header from 'components/header'
import { useNavigate } from 'react-router-dom'
import ClassServise from 'services/ClassSevrice'
import { useParams } from 'react-router-dom'
import { useInitialRequest } from 'hooks/useInitialRequest'


const ClassPage = () => {


    const { id } = useParams()



    const [isLoading] = useInitialRequest(
        {},
        async () => ClassServise.get(id),
        {
            200: (resp) => setClass(resp.data)
        }
    )

    const [_class, setClass] = useState({})


    return (
        <>
            <Header />
            <div className={pagesCss.content_up_100_down_200}>
                <ClassForm isLoading={isLoading} data={_class} setClassData={setClass} />
            </div>
        </>

    )
}

export default ClassPage