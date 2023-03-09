import css from './task.module.css'
import { useOpen } from 'hooks/useOpen'
import Action from 'UI/Inputs/action'


function Task({name}) {
    const { condition, open } = useOpen(()=>'')
    
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
            <div className={css.body} onClick={(evt)=> evt.stopPropagation()}>
                <div className={css.main}>
                    <div className={css.deadlines}>
                        <div className={css.time}>
                            <span>Срок сдачи: </span>     
                            <p className={css.deadline}>15 февр.</p>
                        </div>
                    </div>
                    <div className={css.content}>
                        This quiz tests your knowledge on a range of geography topics from around the world. The questions cover everything from capitals and landmarks to mountains and rivers. You will be presented with 10 multiple-choice questions, each with four possible answers. Choose the answer you think is correct, and at the end of the quiz, you will receive your score along with the correct answers. Good luck!
                    </div>
                </div>
                <div className={css.footer}>
                    {/* <Action icon="fa-solid fa-file-pen" text={'Приступить к выполнению'}/> */}
                    <Action icon={"fa-solid fa-eye"} text="Просмотреть выполнненые" />
                    <Action icon={"fa-solid fa-pen"} text='Изменить' />
                    <Action icon={"fa-solid fa-trash"} styleAction='error' text='Удалить' />
                    
                </div>
            </div>
            <div className={css.border}></div>
        </div>
    )
}

export default Task
