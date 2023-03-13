import css from './test-template.module.css'
import Action from 'UI/Inputs/action'
import { useOpen } from 'hooks/useOpen'


function TestTemplate({ remove, id, addToClass, name, description }) {

    const { condition, open } = useOpen()

   

    return (
        <div onClick={()=>{open()}} className={[css.block, css[`open-${condition}`]].join(' ')}>
            
            <div className={css.header}>
                <p className={css.title}>{name}</p>
                {/* <p className={css.question_count}>Вопросы: 15</p> */}
            </div>
            <div className={css.body}>
                <div className={css.subject}> </div>
                <p className={css.description}>{description}</p>
            </div>
            <div onClick={(evt)=>evt.stopPropagation()} className={css.footer}>
                <Action onClick={addToClass} icon={"fa-solid fa-file-circle-plus"} text='Назначить' />
                <div className={css.ed}>
                    <Action icon={"fa-solid fa-pen"} text='Изменить' to={`/tests/${id}/edit`} />
                    <Action icon={"fa-solid fa-trash"} styleAction='error' onClick={remove} text='Удалить' />
                </div>
                
                
            </div>
            
        </div>
    )
}

export default TestTemplate
