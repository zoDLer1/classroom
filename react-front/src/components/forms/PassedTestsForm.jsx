import membersCss from 'pages/css/members.module.css'
import css from './css/passed-test-form.module.css'
import DefaultLink from 'components/UI/navigation/DefaultLink'
import { useNavigate } from 'react-router-dom'
import PassedTest from '../lists/items/PassedTest'
import Action from 'components/UI/inputs/Action'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from 'react-router-dom'

export default function PassedTestsForm({ id }) {

    const { data } = useOutletContext()


    const { _class, passed_tests, template_info } = data
    const navigate = useNavigate()


    const getStatus = (percent) => {
        if (percent >= 90) {
            return css.perfect
        }
        if (percent < 90 && percent >= 80) {
            return css.great
        }
        if (percent < 80 && percent >= 65) {
            return css.normal
        }
        if (percent < 65 && percent >= 45) {
            return css.middle
        }
        return css.bad
    }

    return (
        <>
            <div className={css.header}>
                <h2 className={css.name}>{template_info?.name}</h2>
                <p className={css.description}>{template_info?.description}</p>
                <div className={css.class_info}>
                    <p>Класс: </p>
                    <DefaultLink to={'/classes/' + _class?.id}>
                        <span>{_class?.name}</span>
                    </DefaultLink>
                </div>
            </div>
            <div className={[membersCss.heading].join(' ')}>
                <p className={[css.passed_tests, membersCss.text].join(' ')}>Пройденные тесты</p>
            </div>
            <div className={[membersCss.members, css.passed_test].join(' ')}>
                {!passed_tests.length
                    ? <div className={membersCss.empty}>
                        <p className={membersCss.text}>Пройденных тестов пока нет</p>
                    </div>
                    : passed_tests.map(passed_test =>
                        <PassedTest key={passed_test.member.id} id={passed_test.member.id} {...passed_test.member.info} onView={() => navigate(`/tests/passed/${passed_test?.id}/`)}>
                            <div className={css.view}>
                                <div className={[css.status, passed_test.status === 1 ? css.passing : css.ended].join(' ')}>{passed_test.status === 1 ? 'Проходится' : 'Пройден'}</div>
                                <div className={[css.status, getStatus(passed_test.results)].join(' ')}>{passed_test.results + '%'}</div>
                            </div>
                        </PassedTest>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Action onClick={() => navigate('/classes/' + _class?.id)} icon={faAnglesLeft} text={"Назад"}></Action>
            </div>

        </>
    )
}
