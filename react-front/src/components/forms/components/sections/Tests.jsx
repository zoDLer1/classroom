import css from './css/tests.module.css'
import Task from './components/Test'
import Action from 'components/UI/inputs/Action'
import Access from 'components/Access'
import { faPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { IsStudent, IsTeacher } from 'routes/Guards'
import { useNavigate } from 'react-router-dom'

function Tests({ tests }) {

    const navigate = useNavigate()

    return (
        <div className={css.block}>

            <div className={css.header}>
                <Access permission={IsTeacher}>
                    <Action text={'Добавить'} onClick={() => navigate('/tests/templates')} icon={faPlus} />
                </Access>
                <Access permission={IsStudent}>
                    <Action icon={faCircleCheck} text={'Мои пройденные задания'} />
                </Access>
            </div>
            <div className={css.tasks}>
                {tests.map(test => <Task key={`task-${test.id}`} {...test} />)}
            </div>
            <div className={css.add}>
                <Action text={'Ещё'} />
            </div>
        </div>
    )
}

export default Tests
