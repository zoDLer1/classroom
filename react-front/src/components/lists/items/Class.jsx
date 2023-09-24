import DefaultLink from 'components/UI/navigation/DefaultLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUsers, faSpinner, faPen, faTrash, faPalette, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/UI/inputs/Input'
import { useOpen } from 'hooks/globalUI/useOpen'
import { useEffect } from 'react'
import { useMenu } from 'hooks/globalUI/useGlobalUI'


function Class({ stored, value, methods, onColorMenu, updateRequest, deleteRequest, loading }) {

    const menu = useMenu()

    const onMenuOpen = (evt, current_item) => {
        menu.setCurrent(current_item)
        menu.setCoords(evt.clientX, evt.clientY)
        menu.setItems([
            {
                text: 'Цвет', icon: faPalette, action: (current, coords) => onColorMenu(current, coords)
            },
            {
                text: 'Переименовать', icon: faPen, action: editModeOn
            },
            {
                text: 'Удалить', icon: faTrash, action: () => deleteRequest(value.id)
            }
        ])

        menu.open()
    }

    const setName = (name) => {
        methods.update({ ...value, name })
    }

    const [{ condition: editMode }, { open, close }] = useOpen()

    const applyName = async (data) => {
        await updateRequest(data, {
            200: () => methods.commit('name'),
            'bad': () => methods.reject('name')
        })
    }

    const editModeOn = () => {
        open()
        methods.store('name')
    }
    const editModeOff = () => close()

    useEffect(() => {
        if (!editMode) {
            if (stored.name && stored.name !== value.name) {
                applyName({ id: value.id, data: { name: value.name } })
            }
            else {
                methods.commit('name')
            }
        }
    }, [editMode])

    const onKeyEnter = (evt) => {
        if (evt.keyCode === 13) {
            editModeOff()
        }
    }
 
    return (
        <div className='h-80 w-80 flex-vertical overflow-hidden relative select-none box rounded-xl'>
            <DefaultLink className='h-24 px-10' disabled={editMode} to={`/classes/${value.id}`} onClick={(evt) => evt.stopPropagation()} style={{ backgroundColor: `#${value.color_info.value}` }}>
                <div className='overflow-hidden mt-8 gap-6 flex-ic' >
                    <div>
                        <Input labelStyle={'overflow-hidden whitespace-nowrap w-44 text-ellipsis'} onKeyUp={onKeyEnter} styleType={'light'} readOnly={!editMode} field={{ value: value.name, onChange: (evt) => setName(evt.target.value) }}  >
                            <FontAwesomeIcon className='text-white text-3xl cursor-pointer' icon={faCheck} onClick={editModeOff}  size='lg' />
                        </Input>

                        {!editMode && <FontAwesomeIcon style={{ stroke: `#${value.color_info.value}`, strokeWidth: 3 }} className='absolute text-white text-6xl scale-110 right-[10%] top-[15%]' icon={faUsers}></FontAwesomeIcon>}
                    </div>

                </div>
            </DefaultLink>
            <div className='flex-1'>
            </div>
            <footer className='border-gray-450 border-t-[3px] mx-7 flex-ic-je px-2.5 py-3 gap-5 relative'>
                <div onClick={(evt) => onMenuOpen(evt, value)} className='w-5 flex-ic-jc cursor-pointer text-xl text-gray-450 hover:text-primary'>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
                {loading && <FontAwesomeIcon className='text-primary-faded text-xl absolute left-[5%]' icon={faSpinner} spinPulse ></FontAwesomeIcon>}
            </footer>
        </div>

    )
}
export default Class
