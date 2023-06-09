import css from './css/test-template.module.css'
import Action from 'components/UI/inputs/Action'
import { useOpen } from 'hooks/useOpen'
import { faFileCirclePlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faEye } from '@fortawesome/free-solid-svg-icons'


function Template({ onAppoint, onDelete, ...testData }) {
    const navigate = useNavigate()
    const [{ condition }, { open }] = useOpen()
    const { id, name, description } = testData


    return (
        <div onClick={() => { open() }} className={[css.block, css[`open-${condition}`]].join(' ')}>

            <div className={css.header}>
                <p className={css.title}>{name}</p>
                {/* <p className={css.question_count}>Вопросы: 15</p> */}
            </div>
            <div className={css.body}>
                <div className={css.subject}> </div>
                <p className={css.description}>{description}</p>
            </div>
            <div onClick={(evt) => evt.stopPropagation()} className={css.footer}>
                <Action onClick={() => onAppoint(testData)} icon={faFileCirclePlus} text='Назначить' />

                <div className={css.ed}>
                    <Action onClick={() => navigate('/tests/templates/' + testData.id + '#view')} icon={faEye} text='Просмотреть' />
                    <Action icon={faTrash} styleAction='error' onClick={() => onDelete(id)} text='Удалить' />
                </div>


            </div>

        </div>
    )
}

export default Template
