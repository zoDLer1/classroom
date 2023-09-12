import css from './css/class.module.css'
import DefaultLink from 'components/UI/navigation/DefaultLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUsers, faSpinner, faPen, faTrash, faPalette, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Input from 'components/UI/inputs/Input'
import { useOpen } from 'hooks/globalUI/useOpen'
import { useEffect } from 'react'
import { useMenu } from 'hooks/globalUI/useGlobalUI'


function Class({ stored, value, methods, onColorMenu, updateRequest, deleteRequest, loading, updateRequestData }) {

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
        <div className={css.block}>
            <DefaultLink disabled={editMode} to={`/classes/${value.id}`} onClick={(evt) => evt.stopPropagation()} style={{ backgroundColor: `#${value.color_info.value}` }} className={css.header}>
                <div className={css.edit_layer} >
                    <div className={css.input}>
                        <Input labelStyle={css.input_label} onKeyUp={onKeyEnter} style={{ mixWidth: 200 }} styleType={'light'} readOnly={!editMode} field={{ value: value.name, onChange: (evt) => setName(evt.target.value) }}  >
                            <FontAwesomeIcon icon={faCheck} onClick={editModeOff} className={css.apply} size='lg' />
                        </Input>

                        {!editMode && <FontAwesomeIcon style={{ stroke: `#${value.color_info.value}`, strokeWidth: 3 }} className={css.icon} icon={faUsers}></FontAwesomeIcon>}
                    </div>

                </div>
            </DefaultLink>
            <div className={css.events}>

                {/* {value.events.map(event => <Event key={event.id} data={event}/>)} */}
            </div>
            <footer className={css.footer}>
                <div onClick={(evt) => onMenuOpen(evt, value)} className={css.action}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
                {loading && <FontAwesomeIcon className={css.loader} icon={faSpinner} ></FontAwesomeIcon>}
            </footer>
        </div>

    )
}
export default Class
