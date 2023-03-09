import css from './css/cardList.module.css'
import Card from './card'
import Menu from 'UI/Menu'
import ColorMenu from 'UI/ColorMenu'
import { useMenu } from 'hooks/useMenu'
import { useList } from 'hooks/useList'
import ClassServise from 'services/ClassSevrice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'





function ClassesList({ popupCurrent, popupOpen, popupCondition }) {
    const navigate = useNavigate()

    const [tests, testsActions, testsStoreActions, testsStateActions] = useList(
        (id) => {rejectNameEdit(id)}
    )

    async function fetchClasses() {
        let response = []
        try{
            response = await ClassServise.all()
        }
        catch{
            navigate('/serverunavailable')
        }
        testsActions.setItems(response.data)
        
    }

    useEffect(()=>{
        
        fetchClasses()
        
    }, [popupCondition])

    
    
    
    

    const rejectColorEdit = (current) => {
        colorsMenuActions.close()
        testsStoreActions.reject(current.id, 'color')
    }
    const setColor = (id, color) => {
        testsActions.setItemProp(id, 'color', color)
    }
    const apllyColorEdit = (current) => {
        testsStateActions.loadingState(current.id, true)
        ClassServise.patch(current.id, {'color': 5}).then(
            (response) => {
                testsStoreActions.commit(current.id, 'color')
                testsStateActions.loadingState(current.id, false)
            },
            (error) => {
                testsStoreActions.reject(current.id, 'color')
                testsStateActions.loadingState(current.id, false)
            }
        )
        colorsMenuActions.close()

    }
    const apllyNameEdit = (current) => {
        testsStateActions.editModeOff(current.id)
        testsStateActions.loadingState(current.id, true)
        ClassServise.patch(current.id, {'name': current.name}).then(
            (response) => {
                testsStoreActions.commit(current.id, 'name')
                testsStateActions.loadingState(current.id, false)
            },
            (error) => {
                testsStoreActions.reject(current.id, 'name')
                testsStateActions.loadingState(current.id, false)
            }
        )
    }
    const rejectNameEdit = (current) => {
        testsStoreActions.reject(current.id, 'name')
    }
    const deleteClass = async(current) => {
        testsStateActions.loadingState(current.id, true)
        try{
            await ClassServise.delete(current.id).then(
                ()=>{
                    testsStateActions.loadingState(current.id, false)
                    testsActions.removeItem(current.id)
                },
                ()=>{
                    testsStateActions.loadingState(current.id, false)
                    navigate('/serverunavailable')
                }

            )
        }
        catch{
            
            navigate('/serverunavailable')
        }
        
    }


    
    const [colorsMenu, colorsMenuActions] = useMenu([
        { id: 1, value: 'AC725E', action: (current) => setColor(current.id, 'AC725E') },
        { id: 2, value: 'D06B64', action: (current) => setColor(current.id, 'D06B64') },
        { id: 3, value: 'F83A22', action: (current) => setColor(current.id, 'F83A22') },
        { id: 4, value: 'FF7537', action: (current) => setColor(current.id, 'FF7537') },
        { id: 5, value: '0388D4', action: (current) => setColor(current.id, '0388D4') },
        { id: 6, value: 'F0A720', action: (current) => setColor(current.id, 'F0A720') },
        { id: 7, value: '00B94F', action: (current) => setColor(current.id, '00B94F') },
        { id: 8, value: 'A47AE2', action: (current) => setColor(current.id, 'A47AE2') }
    ],
        (current) => { testsStoreActions.reject(current.id, 'color') }
    )
    const [menu, menuActions] = useMenu(
        [
            {
                text: 'Add to class', icon: "fa-solid fa-plus", action: (current) => {
                    popupCurrent(current)
                    popupOpen()
                }
            },
            {
                text: 'Color', icon: "fa-solid fa-palette", action: (current, coords) => {
                    colorsMenuActions.open()
                    
                    testsStoreActions.storeProp(current.id, 'color')
                    colorsMenuActions.setCurrent(current)
                    colorsMenuActions.setCoords(...coords)
                }
            },
            {
                text: 'Remane', icon: "fa-solid fa-pen", action: (current) => {
              
                    testsStateActions.editModeOn(current.id)
                    testsStoreActions.storeProp(current.id, 'name')
                }
            },
            {
                text: 'Delete', icon: "fa-solid fa-trash", action: deleteClass
                    
                
            }
        ],
        // (current) => console.log(current)

    )




  


    return (
        <div className={css.block}>
            {tests.map(item =>
                <Card
                    nameEdit={apllyNameEdit}
                    menuOpen={(evt) => {

                        menuActions.open()
                        menuActions.setCoords(evt.clientX, evt.clientY)
                        menuActions.setCurrent(item.value)
                    }}
                    update={testsActions.updateItem}
                    key={item.value.id}
                    data={item.value}
                    {...item}
                />
            )}
            <Menu {...menu} />
            <ColorMenu
                {...colorsMenu}
                onAplly={
                    apllyColorEdit
                }
                onReject={
                    rejectColorEdit
                }
            />
        </div>

    )
}
export default ClassesList

