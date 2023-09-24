import useCurrectLocationPage from "hooks/useCurrectLocationPage"
import PageSwitcher from "components/UI/navigation/PageSwitcher"
import { Outlet } from "react-router-dom"

const pages = [
    {
        text: 'Результаты',
        url: 'results'
    },
    {
        text: 'Статистика',
        url: 'statistic'
    },
    {
        text: 'Настройки',
        url: 'settings'
    }
]
const TestForm = ({ id, testData }) => {
    
    const current = useCurrectLocationPage(pages, `/tests/${id}`, 'results')

    return (
        <div className='flex-vertical gap-8'>
            <PageSwitcher pages={pages} current={current} />
            {current !== -1 && <Outlet context={{ data: testData[pages[current].url] }} />}
        </div>
    )
}
export default TestForm