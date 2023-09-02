import css from './css/tests.module.css'
import Task from './components/Test'
import Action from 'components/UI/inputs/Action'
import Access from 'components/Access'
import { faPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { usePermissions } from 'hooks/user/useUser'

function Tests() {

    
    const { data, defaultRedirect } = useOutletContext()
    const navigate = useNavigate()
    const permissions = usePermissions()
    if (!data){
        return defaultRedirect
    }

    return (
        <div className={css.block}>
            <div className={css.header}>
                <Access permission={permissions.isTeacher}>
                    <Action text={'Добавить'} onClick={() => navigate('/tests/templates')} icon={faPlus} />
                </Access>
                <Access permission={permissions.isStudent}>
                    <Action icon={faCircleCheck} text={'Мои пройденные задания'} />
                </Access>
            </div>
            <div className={css.tasks}>
                {data.map(test => <Task permissions={permissions} key={`task-${test.id}`} {...test} />)}
            </div>
            <div className={css.add}>
                <Action text={'Ещё'} />
            </div>
        </div>
    )
}

export default Tests
