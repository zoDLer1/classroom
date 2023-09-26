import useCurrectLocationPage from "hooks/useCurrectLocationPage"
import PageSwitcher from "components/UI/navigation/PageSwitcher"
import { Outlet } from "react-router-dom"



const TestForm = ({ id, testData, pages }) => {



    const current = useCurrectLocationPage(pages, `/tests/${id}`, 'results')

    return (
        <div className='flex-vertical gap-8'>
            <PageSwitcher pages={pages} current={current} />
            {current !== -1 && <Outlet context={{ data: testData[pages[current].url] }} />}
        </div>
    )
}
export default TestForm