import css from './css/card-list.module.css'
import Class from './items/Class'
import { useMenuControl } from 'hooks/globalUI/controls/useMenuControl'
import ColorMenu from 'components/UI/modelWindows/ColorMenu'
import ClassServise from 'services/ClassSevrice'
import useDataRequest from 'hooks/requests/useDataRequest'
import { useInitialRequest } from 'hooks/requests/useInitialRequest'
import { useEffect } from 'react'



function ClassesList({ classes, storedValues, classesActions }) {


    const applyColor = async (current) => {
        await updateRequest({ id: current.id, data: { color: current.color_info.id } }, {
            200: (_, { id }) => {
                classesActions.commit(id, 'color_info')
            },
            'bad': (_, { id }) => {
                classesActions.reject(id, 'color_info')
            }
        })
    }



    const [updateRequest, updateRequestData] = useDataRequest(async ({ id, data }) => await ClassServise.patch(id, data))

    const [deleteRequest, deleteRequestData] = useDataRequest(
        ClassServise.delete,
        {
            204: (_, id) => classesActions.removeItem(id)
        },
    )

    const [colorMenuInfo, colorMenuActions] = useMenuControl()



    useEffect(() => {

        if (!colorMenuInfo.condition && colorMenuInfo.current) {
            if (storedValues[colorMenuInfo.current.id].color_info.id !== colorMenuInfo.current.color_info.id) {
                applyColor(colorMenuInfo.current)
            }
            else {
                classesActions.commit(colorMenuInfo.current.id, 'color_info')
            }
        }
    }, [colorMenuInfo.condition])


    useInitialRequest({},
        ClassServise.getColors,
        {
            200: (response) => {
                colorMenuActions.setItems(response.data.map(item => ({
                    ...item, action: (current) => {
                        classesActions.setValue(current.id, { ...current, color_info: item })
                        colorMenuActions.setCurrent({ ...current, color_info: item })
                    }
                })))
            }
        }
    )


    const ColorMenuOpen = (current, coords) => {
        colorMenuActions.setCurrent(current)
        colorMenuActions.setCoords(...coords)
        colorMenuActions.open()
        classesActions.saveProperty(current.id, 'color_info')
    }

    return (
        <div className={css.block}>
            <ColorMenu {...colorMenuActions} {...colorMenuInfo} />
            {classes().map(([id, item]) =>
                <Class
                    onColorMenu={ColorMenuOpen}
                    {...item}
                    updateRequestData={updateRequestData}
                    loading={(updateRequestData.id === +id) || (deleteRequestData === +id)}
                    updateRequest={updateRequest}
                    deleteRequest={deleteRequest}
                    key={id}

                />
            )}
        </div>

    )
}
export default ClassesList

