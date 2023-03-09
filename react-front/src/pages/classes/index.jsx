import CardList from 'components/testsList'
import { useState } from 'react'
import Popup from 'UI/Popup'
import Help from 'components/help'
import HelpAction from 'components/help/helpAction'
import { usePopup } from 'hooks/usePopup'
import Header from 'components/header'
import CreateClassForm from 'components/forms/create-class-form'
import JoinClassForm from 'components/forms/join-class-form'
import user from 'store/user'

function TestPage (){

    const { condition, setCurrent, current, ...hook } = usePopup()
    
    const [help, setHelp] = useState(false) 

    return (
        <>
            <Header actions={[
                {icon: "fa-solid fa-plus", text: '', action: ()=>hook.open()}
            ]}
            />
            <div>
                <CardList popupCondition={condition} popupOpen={hook.open} popupCurrent={setCurrent} />
            </div>
            <Popup condition={condition} {...hook}>
                {user.data.role === 2 ? 
                    <CreateClassForm close={hook.close} current={current}/>
                    : <JoinClassForm />
                }
            </Popup>

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