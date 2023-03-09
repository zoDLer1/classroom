import css from './tasks.module.css'
import Task from './task'
import Action from 'UI/Inputs/action'
import FormLoader from 'components/forms/formLoader'
import ClassServise from 'services/ClassSevrice'
import { useLoading } from 'hooks/useLoading'
import { useState } from 'react'

function Tasks( { class_id } ) {

    const [tests, setTests] = useState([])
    const { isLoading } = useLoading(
        async () =>{
            const response = await ClassServise.tasks(class_id)
            setTests(response.data.tests)
        },
        true
    )

    return (
        <div className={css.block}>
            <FormLoader condition={isLoading}>
                <div className={css.header}>
                    <Action text={'Добавить'} to={'/tests'} icon='fa-solid fa-plus'/>
                    <Action icon="fa-solid fa-file-circle-check" text={'Мои пройденные задания'}/>
                </div>
                <div className={css.tasks}>
                    {tests.map(test => <Task key={`task-${test.id}`} {...test.template}/>)}
                </div>
                <div className={css.add}>
                    <Action text={'Ещё'} />
                </div>
            </FormLoader>
        </div>
    )
}

export default Tasks
