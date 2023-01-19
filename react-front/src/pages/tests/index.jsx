import css from './css/test.module.css'
import PageSection from 'components/pageSection'
import CardList from 'components/testsList'
import { useState } from 'react'
import Popup from 'UI/Popup'
import AddToClassForm from 'components/forms/add-to-class-form'
import Help from 'components/help'

import HelpAction from 'components/help/helpAction'




export default () =>  {

    const [popup, setPopup] = useState({active:false, current: null})
    
    const switchPopup = (active, current) => {
        current = active ? current : null
        setPopup({active, current})
    }

    const [help, setHelp] = useState(false) 

    return (
        <>
            <PageSection className={css.section}>
                <CardList switchPopup={switchPopup} />
            </PageSection>
            <Popup popup={popup}>
                <AddToClassForm set={switchPopup} card={popup.current}/>
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
