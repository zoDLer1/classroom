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
            return 'bg-[#18b126]'
        }
        if (percent < 90 && percent >= 80) {
            return 'bg-[#6e9d22]'
        }
        if (percent < 80 && percent >= 65) {
            return 'bg-[#9d9922]'
        }
        if (percent < 65 && percent >= 45) {
            return 'bg-[#974a25]'
        }
        return 'bg-[#974a25]'
    }

    return (
        <>
            <div className='px-[10px] pb-8 flex flex-col gap-5'>
                <h2 className='text-primary text-2xl font-semibold'>{template_info?.name}</h2>
                <p>{template_info?.description}</p>
                <div className='flex items-center gap-[10px]'>
                    <p>Класс: </p>
                    <DefaultLink to={'/classes/' + _class?.id}>
                        <span className='text-primary'>{_class?.name}</span>
                    </DefaultLink>
                </div>
            </div>
            <div className='min-h-[150px]'>
                <TitleList title={'Пройденные тесты'} empty={
                    <div className='pt-8'>
                        <p className='text-black opacity-50 text-[17px]'>Пройденных тестов пока нет</p>
                    </div>
                }>
                    {data.passed_tests.map(passed_test =>
                        <PassedTest key={passed_test.member.id} id={passed_test.member.id} {...passed_test.member.info} onView={() => navigate(`/tests/passed/${passed_test?.id}/`)}>
                            <div className='flex gap-[10px]'>
                                <div className={'py-[3px] px-[5px] text-sm rounded-[10px] text-white ' + (passed_test.status === 1 ? 'bg-primary' : 'bg-[#1AD92C]')}>{passed_test.status === 1 ? 'Проходится' : 'Пройден'}</div>
                                <div className={'py-[3px] px-[5px] text-sm rounded-[10px] text-white ' + getStatus(passed_test.results)}>{passed_test.results + '%'}</div>
                            </div>
                        </PassedTest>)}
                </TitleList>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Action onClick={() => navigate('/classes/' + _class?.id)} icon={faAnglesLeft} text={"Назад"}></Action>
            </div>

        </>
    )
}
