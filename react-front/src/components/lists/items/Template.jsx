import Action from 'components/UI/inputs/Action'
import { useOpen } from 'hooks/globalUI/useOpen'
import { faFileCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'


function Template({ onAppoint, onDelete, ...testData }) {
    const navigate = useNavigate()
    const [{ condition }, { open }] = useOpen()
    const { id, name, description } = testData

    return (
        <div onClick={() => { open() }} className={cx('flex flex-col gap-5 py-4 px-6 h-24 cursor-pointer transition-height overflow-hidden duration-200 shadow-custom rounded-2xl', { 'h-46': condition })}>

            <div className='flex-ic-jb'>
                <p className={'text-gray-320 text-lg font-medium'}>{name}</p>
                {/* <p className={css.question_count}>Вопросы: 15</p> */}
            </div>
            <div className='flex-1'>
                {/* <div className={css.subject}> </div> */}
                <p className={cx('text-gray-470 text-sm line-clamp-3 text-ellipsis whitespace-nowrap', { '!whitespace-normal': condition })}>{description}</p>
            </div>
            <div className={cx('hidden justify-between', { '!flex': condition })}>
                <Action onClick={() => onAppoint(testData)} icon={faFileCirclePlus} text='Назначить' />

                <div onClick={(evt) => evt.stopPropagation()} className='flex'>
                    <Action onClick={() => navigate('/tests/templates/' + testData.id)} icon={faEye} text='Просмотреть' />
                    <Action icon={faTrash} styleAction='error' onClick={() => onDelete(id)} text='Удалить' />
                </div>


            </div>

        </div>
    )
}

export default Template
