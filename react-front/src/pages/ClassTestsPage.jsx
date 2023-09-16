import css from './css/tests.module.css'
import Test from '../components/lists/items/Test'
import Action from 'components/UI/inputs/Action'
import Access from 'components/permissions/Access'
import { faPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { usePermissions } from 'hooks/store/useUser'

function ClassTestsPage() {

    
    const { data } = useOutletContext()
    const navigate = useNavigate()
    const permissions = usePermissions()


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
                {data.map(test => <Test permissions={permissions} key={`task-${test.id}`} {...test} />)}
            </div>
            <div className={css.add}>
                <Action text={'Ещё'} />
            </div>
        </div>
    )
}

export default ClassTestsPage
