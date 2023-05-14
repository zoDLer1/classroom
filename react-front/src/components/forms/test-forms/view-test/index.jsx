import css from '../css/test.module.css'
import ViewHeader from '../components/headers/view'
import ViewQuestionList from '../components/question-lists/view'
import ViewFooter from '../components/footers/view'
import Popup from 'UI/Popup'
import AddToClassForm from 'components/forms/components/sections/components/AddToClassForm'
import { useState } from 'react'




export default (props) =>  {

    const [popup, setPopup] = useState({active:false})


    const switchPopup = () => {
        if (!popup.active){
            window.scrollTo(0, 0);
        }
        setPopup({active: !popup.active})
    }

    

    return (
        <div className={css.block}>
            <ViewHeader name={props.data.name} description={props.data.description} />
            <ViewQuestionList questions={props.data.questions}/>
            <ViewFooter addToClass={switchPopup} />
            <Popup popup={popup}>
                <AddToClassForm set={switchPopup} card={props.data}/>
            </Popup>
        </div>
    )
}
