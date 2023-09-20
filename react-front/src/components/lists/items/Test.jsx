import { useOpen } from 'hooks/globalUI/useOpen'
import Action from 'components/UI/inputs/Action'
import Access from 'components/permissions/Access'
import { faEye, faTrash, faPen, faEllipsisVertical, faCircle, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'


function Test({ id, template_info: { name, description }, passed_test, permissions }) {

    const [{ condition }, { open }] = useOpen()
    const navigate = useNavigate()

    return (
        <div onClick={open} className={cx('transition-box_shadow duration-400 rounded-[20px]', { 'my-4 shadow-md': condition })}>
            <div className={cx('group flex cursor-pointer items-center justify-between p-3 rounded-[20px] border-b-[1px] border-solid border-black border-opacity-0 hover:bg-primary-100', { 'bg-primary-100 rounded-b-none !border-opacity-10': condition })}>
                <div className='flex items-center gap-5'>
                    <span className="fa-layers fa-2xl">
                        <FontAwesomeIcon className={cx('group-hover:text-primary text-gray-300', { '!text-primary': condition })} icon={faCircle} size='lg' />
                        <FontAwesomeIcon icon={faFileLines} transform="shrink-6 right-2" inverse />
                    </span>
                    <p className='font-medium text-gray-750 text-base max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis select-none'>{name}</p>
                </div>
                <div className='flex items-center gap-5'>
                    <p className='flex gap-3 justify-end text-sm text-opacity-50 text-black'>Опубликовано 15 февр.</p>
                    <div className={cx('opacity-0 group-hover:opacity-100', { 'opacity-100': condition })}>
                        <span className="fa-layers fa-xl">
                            <FontAwesomeIcon icon={faCircle} className='opacity-0 hover:opacity-10 z-10' transform="shrink--2" />
                            <FontAwesomeIcon icon={faEllipsisVertical} className='text-gray-500' transform="shrink-4" inverse />
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('h-0 overflow-hidden flex flex-col px-5 transition-height duration-300', { 'h-60 pt-3': condition })} onClick={(evt) => evt.stopPropagation()}>
                <div className='flex-1 flex gap-5 flex-col'>
                    <div className='text-end pr-10'>
                        <div className='flex gap-3 justify-end text-sm text-opacity-50 text-black'>
                            <span>Срок сдачи: </span>
                            <p className={'text-[#1ad92c]'}>15 февр.</p>
                        </div>
                    </div>
                    <div className='max-h-32 text-ellipsis overflow-y-auto'>
                        {description}
                    </div>
                </div>
                <div className='flex gap-5 py-5'>
                    <Access permission={permissions.isStudent}>
                        {
                            !passed_test
                                ? <Action onClick={() => navigate(`/tests/pass/${id}`)} icon={faPen} text={'Приступить к выполнению'} />
                                : <Action icon={faEye} onClick={() => navigate(`/tests/passed/${passed_test}`)} text={'Просмотреть результат'} />
                        }
                    </Access>
                    <Access permission={permissions.isTeacher}>
                        <Action onClick={() => navigate(`/tests/${id}`)} icon={faEye} text="Просмотреть выполнненые" />
                        <Action icon={faTrash} styleAction='error' text='Удалить' />
                    </Access>
                </div>
            </div>
        </div>
    )
}

export default Test
