import css from './tasks.module.css'
import Task from './task'
import Action from 'UI/Inputs/action'
import FormLoader from 'components/forms/formLoader'
import ClassServise from 'services/ClassSevrice'
import { useLoading } from 'hooks/useLoading'
import { useState } from 'react'
import Access from 'components/Access'
import user from 'store/user'

function Tasks( { class_id } ) {

    const [tests, setTests] = useState([])
    const { isLoading } = useLoading(
        async () =>{
            const response = await ClassServise.tasks(class_id)
            setTests(response.data.tests)
            console.log(response.data.tests)
        },
        true
    )

    return (
        <div className={css.block}>
            <FormLoader condition={isLoading}>
                <div className={css.header}>
                    <Access current_permission={user.data.role} permission={2}>
                        <Action text={'Добавить'} to={'/tests'} icon='fa-solid fa-plus'/>
                    </Access>
                    <Access current_permission={user.data.role} permission={1}>
                        <Action icon="fa-solid fa-file-circle-check" text={'Мои пройденные задания'}/>
                    </Access>
                </div>
                <div className={css.tasks}>
                    {tests.map(test => <Task taskId={test.id} key={`task-${test.id}`} {...test.template}/>)}
                </div>
                <div className={css.add}>
                    <Action text={'Ещё'} />
                </div>
            </FormLoader>
        </div>
    )
}

export default Tasks
