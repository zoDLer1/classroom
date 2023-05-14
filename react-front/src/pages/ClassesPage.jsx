import CardList from 'components/lists/TestsList'
import { useState, useContext } from 'react'
import Help from 'components/help'
import HelpAction from 'components/help/helpAction'
import Header from 'components/header'
import CreateClassForm from 'components/forms/CreateClassForm'
import JoinClassForm from 'components/forms/join-class-form'
import user from 'store/user'
import { GlobalUIContext } from 'contexts/GlobalUIContext'
import { useCollection } from 'hooks/useCollection'



function TestPage (){

    const { popup } = useContext(GlobalUIContext)
    
    const [help, setHelp] = useState(false) 

    const [classes, classesActions, classesStateActions, classesStoreActions] = useCollection((current) => classesStoreActions.reject(current.value.id, 'name'))

    const addClass = (item) => {
        classesActions.addItem(item)
    }

    const popupOpen = () =>{
        popup.open()
        const content = user.data.role === 2 ? <CreateClassForm addClass={addClass}  close={popup.close} /> : <JoinClassForm  close={popup.close} />
        popup.setContent(content)
    }

    
    return (
        <>
            <Header actions={[
                {icon: "fa-solid fa-plus", text: '', action: popupOpen}
            ]}
            />
            <div>
                <CardList classes={classes} classesActions={classesActions} classesStateActions={classesStateActions} classesStoreActions={classesStoreActions} />
            </div>
            <Help active={help} set={setHelp}>
                <HelpAction 
                    data={{
                        pointer: {direction: 'right'},
                        coords: {x: 360, y: -10}, 
                        width: 350, 
                        label: "OMG it's your class!!!", 
                        info: 'Start from scratch by drawing new paths and shapes.'
                    }} 
                    window={{
                        coords: {x: 160, y: 250}, 
                        size: {width: 360, height: 150}
                    }}/>
                    <HelpAction 
                    data={{
                        pointer: {direction: 'top'},
                        coords: {x: 160, y: 365}, 
                        width: 350, 
                        label: "OMG it's yoasdasdur class!!!", 
                        info: 'Start fsrom scratch by drawing new paths and shapes.'
                    }} 
                    window={{
                        coords: {x: 160, y: 145}, 
                        size: {width: 360, height:365 }
                    }}/>
            </Help>
        </>
        
    )
}
export default TestPage