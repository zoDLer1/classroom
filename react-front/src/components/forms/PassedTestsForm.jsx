import DefaultLink from 'components/UI/navigation/DefaultLink'
import { useNavigate } from 'react-router-dom'
import PassedTest from '../lists/items/PassedTest'
import Action from 'components/UI/inputs/Action'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from 'react-router-dom'
import TitleList from 'components/lists/TitleList'



export default function PassedTestsForm() {

    const { data } = useOutletContext()

    const { _class, passed_tests, template_info } = data
    const navigate = useNavigate()


    const getStatus = (percent) => {
        if (percent >= 90) {
            return 'bg-status-correct-100'
        }
        if (percent < 90 && percent >= 80) {
            return 'bg-status-correct-200'
        }
        if (percent < 80 && percent >= 65) {
            return 'bg-status-warn-100'
        }
        if (percent < 65 && percent >= 45) {
            return 'bg-status-error-400'
        }
        return 'bg-status-error-400'
    }

    return (
        <>
            <div className='px-2.5 pb-8 flex-vertical gap-5'>
                <h2 className='text-primary text-2xl font-semibold'>{template_info?.name}</h2>
                <p>{template_info?.description}</p>
                <div className='flex items-center gap-2.5'>
                    <p>Класс: </p>
                    <DefaultLink to={'/classes/' + _class?.id}>
                        <span className='text-primary'>{_class?.name}</span>
                    </DefaultLink>
                </div>
            </div>
            <div className='h-36'>
                <TitleList title={'Пройденные тесты'} empty={
                    <div className='pt-8'>
                        <p className='text-black text-opacity-50 text-[17px]'>Пройденных тестов пока нет</p>
                    </div>
                }>
                    {passed_tests.map(passed_test =>
                        <PassedTest key={passed_test.member.id} id={passed_test.member.id} {...passed_test.member.info} onView={() => navigate(`/tests/passed/${passed_test?.id}/`)}>
                            <div className='flex gap-2.5'>
                                <div className={'py-[3px] px-[5px] text-sm rounded-xs text-white ' + (passed_test.status === 1 ? 'bg-primary' : 'bg-status-correct')}>{passed_test.status === 1 ? 'Проходится' : 'Пройден'}</div>
                                <div className={'py-[3px] px-[5px] text-sm rounded-xs text-white ' + getStatus(passed_test.results)}>{passed_test.results + '%'}</div>
                            </div>
                        </PassedTest>)}
                </TitleList>
            </div>
            <div className='flex justify-between'>
                <Action onClick={() => navigate('/classes/' + _class?.id)} icon={faAnglesLeft} text={"Назад"}></Action>
            </div>

        </>
    )
}
