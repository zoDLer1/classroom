import { Outlet } from 'react-router-dom'
import PageSwitcher from 'components/UI/navigation/PageSwitcher'
import useCurrectLocationPage from 'hooks/useCurrectLocationPage'


export const defaultRedirectPage = 'tests'



const ClassForm = ({ id, pages, classData, setClassData, setFullData }) => {


    const current = useCurrectLocationPage(pages, `/classes/${id}`, 'tests')


    return (
        <>
            <PageSwitcher current={current} pages={pages} />
            <div className='w-full h-full'>
                {current !== -1 && <Outlet context={{ data: classData[pages[current].url], setData: setClassData, setFullData }} />}
            </div>
        </>
    )
}
export default ClassForm