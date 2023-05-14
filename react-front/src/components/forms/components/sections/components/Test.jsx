import css from './css/test.module.css'
import { useOpen } from 'hooks/useOpen'
import Action from 'components/UI/inputs/Action'
import Access from 'components/Access'
import { faEye, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { IsStudent, IsTeacher } from 'routes/Guards'



function Test({ name, description, is_test_passed }) {
    const [{ condition }, { open }] = useOpen(() => null)

    return (

        <div onClick={open} className={[css.block, css[`isOpen-${condition}`]].join(' ')}>
            <div className={css.header}>
                <div className={css.heading}>
                    <div className={css.icon}>
                        <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <p className={css.title}>{name}</p>
                </div>
                <div className={css.ending}>
                    <p className={css.time}>Опубликовано 15 февр.</p>
                    <div className={css.menu}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
            <div className={css.body} onClick={(evt) => evt.stopPropagation()}>
                <div className={css.main}>
                    <div className={css.deadlines}>
                        <div className={css.time}>
                            <span>Срок сдачи: </span>
                            <p className={css.deadline}>15 февр.</p>
                        </div>
                    </div>
                    <div className={css.content}>
                        {description}
                    </div>
                </div>
                <div className={css.footer}>
                    <Access permission={IsStudent}>
                        {
                            !is_test_passed 
                            ? <Action icon={faPen} text={'Приступить к выполнению'}/>
                            : <Action icon={faEye} text={'Просмотреть результат'}/>
                        }
                        
                        
                    </Access>
                    <Access permission={IsTeacher}>
                        <Action icon={faEye} text="Просмотреть выполнненые" />
                        <Action icon={faPen} text='Изменить' />
                        <Action icon={faTrash} styleAction='error' text='Удалить' />
                    </Access>


                </div>
            </div>
            <div className={css.border}></div>
        </div>
    )
}

export default Test
