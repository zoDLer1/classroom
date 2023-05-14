import css from './css/card-list.module.css'
import Card from './components/Class'
import { useMenu } from 'hooks/useMenu'
import ColorMenu from 'components/UI/modelWindows/ColorMenu'
import ClassServise from 'services/ClassSevrice'
import { useEffect, useContext } from 'react'
import useRequest from 'hooks/useRequest'
import { GlobalUIContext } from 'contexts/GlobalUIContext'
import { faPlus, faPalette, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddToClassForm from 'components/forms/components/sections/components/AddToClassForm'


function ClassesList({ classes, classesActions, classesStateActions, classesStoreActions }) {

    const { menu, popup } = useContext(GlobalUIContext)



    const ApplyColor = async (current) => {
        await changeColorClass({id: current.id, data: {color: classes[current.id].value.color_info.id}})
    }

    const RejectColor = (current) => {
        classesStoreActions.reject(current.id, 'color_info')
    }

    const [colorMenuInfo, colorMenuActions] = useMenu(RejectColor)

    const [getColors, isLoadingColors] = useRequest(
        ClassServise.getColors,
        {
            200: (response) => {
                colorMenuActions.setItems(response.data.map(item => ({ ...item, action: (current) => SetColor(current.id, item) })))
            }
        }
    )
    const [renameClass] = useRequest(
        async ({ id, data }) => await ClassServise.patch(id, data),
        {
            200: (response, { id }) => {
                classesStoreActions.commit(id, 'name')
            },
            0: (response, { id }) => {
                classesStoreActions.reject(id, 'name')
            }
        }
    )
    const [getClasses] = useRequest(
        ClassServise.all,
        {
            200: (response) => classesActions.setItems(response.data)
        }
    )
    const [deleteClass] = useRequest(
        async (id) => await ClassServise.delete(id),
        {
            204: (resp, id) => classesActions.removeItem(id)
        }
    )
    const [changeColorClass] = useRequest(
        async ({ id, data }) => await ClassServise.patch(id, data),
        {
            200: (response, { id }) => {
                console.log(id)
                classesStoreActions.commit(id, 'color_info')
            },
            0: (response, { id }) => {
                RejectColor({ id })
            }
        }
    )



    useEffect(() => {
        getClasses()
    }, [])



    const SetColor = (id, value) => {
        classesActions.setItemProp(id, 'color_info', value)
    }

    const RemoveClass = (current) => {
        // pass
        deleteClass(current.id)
    }

    const ItemMenuOpen = (evt, current) => {
        menu.setItems(menuItems)
        menu.setCurrent(current)
        menu.setCoords(evt.clientX, evt.clientY)
        menu.open()
    }

    const ColorMenuOpen = (current, coords) => {
        colorMenuActions.setCurrent(current)
        colorMenuActions.setCoords(...coords)
        colorMenuActions.open()
        classesStoreActions.storeProp(current.id, 'color_info')
        getColors()
    }

    const AddTestPopupOpen = (current) => {
        popup.open()
        popup.setCurrent(current)
        popup.setContent(<AddToClassForm  />)
    }

    const RenameClass = (current) => {
        const updateClass = async () => {
            classesStateActions.loadingState(current.id, true)
            await renameClass({ id: current.id, data: { name: current.name } })
            classesStateActions.loadingState(current.id, false)
        }
        classesStateActions.editModeOff(current.id)
        if (classes[current.id].stored.name !== classes[current.id].value.name) {
            updateClass()
        }
        else {
            classesStoreActions.reject(current.id, 'name')
        }

    }



    const menuItems = [
        {
            text: 'Add test', icon: faPlus, action: AddTestPopupOpen
        },
        {
            text: 'Color', icon: faPalette, action: ColorMenuOpen
        },
        {
            text: 'Remane', icon: faPen, action: (current) => {
                classesStateActions.editModeOn(current.id)
                classesStoreActions.storeProp(current.id, 'name')
            }
        },
        {
            text: 'Delete', icon: faTrash, action: RemoveClass
        }
    ]


    return (
        <div className={css.block}>
            <ColorMenu onAplly={ApplyColor} onReject={RejectColor} {...colorMenuActions} {...colorMenuInfo} loading={isLoadingColors} />
            {Object.entries(classes).map(([id, item]) =>

                <Card
                    nameEdit={RenameClass}
                    menuOpen={(evt) => {
                        ItemMenuOpen(evt, item.value)
                    }}
                    update={classesActions.updateItem}
                    key={id}
                    {...item}
                />
            )}
        </div>

    )
}
export default ClassesList

