import css from './css/test.module.css'
import { useOpen } from 'hooks/globalUIContent/useOpen'
import Action from 'components/UI/inputs/Action'
import Access from 'components/Access'
import { faEye, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function Test({ id, name, description, passed_test, permissions }) {
    const [{ condition }, { open }] = useOpen()
    const navigate = useNavigate()

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
                    <Access permission={permissions.isStudent}>
                        {
                            !passed_test
                                ? <Action onClick={()=>navigate(`/tests/pass/${id}`)} icon={faPen} text={'Приступить к выполнению'} />
                                : <Action icon={faEye} onClick={()=>navigate(`/tests/passed/${passed_test}`)} text={'Просмотреть результат'} />
                        }


                    </Access>
                    <Access permission={permissions.isTeacher}>
                        <Action onClick={()=>navigate(`/tests/${id}`)} icon={faEye} text="Просмотреть выполнненые" />
                        <Action icon={faTrash} styleAction='error' text='Удалить' />
                    </Access>


                </div>
            </div>
            <div className={css.border}></div>
        </div>
    )
}

export default Test
