import css from './css/new-class-from.module.css'
import formCss from 'components/forms/css/form.module.css'
import ClassType from '../class-form/class-type'
import HiddenList from 'UI/HiddenList'
import Button from 'UI/Button'
import Popup from 'UI/Popup'
import ClassSettings from '../class-form/class-settings'
import { useState } from 'react'
import { useMenu } from 'hooks/useMenu'
import { useAlert } from 'hooks/useAlert'

import Menu from 'UI/Menu'
import Alert from 'UI/alert'
import useForm  from 'hooks/useForm'


export default (props) => {
    const [popup, setPopup] = useState({active: false})
    const [menu, menuSwitch] = useMenu()

    // const { serverErrors, isSubmitted, updateFieldStatuses, onChange, onSubmit, hasError } = useForm(()=>'');


    const alertHook = useAlert()

 


    const copyCode = () => {
        navigator.clipboard.writeText(props.data.code).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            alertHook.show('Скопировано в буффер обмема')
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
        
        menuSwitch(false)
    }

    const items = [
        {text: 'Share link', icon:'fa-solid fa-share', action: () => ''},
        {text: 'Copy code', icon: 'fa-solid fa-copy', action: copyCode},
        {text: 'Change code', icon: 'fa-solid fa-arrow-right-arrow-left', action: () => ''}
    ]
    


    return (
        <>
        
            <div className={[css.block].join(' ')}>
                <div className={[css.header].join(' ')}>
                    <div className={css.data}>
                        <h2 className={css.label}>{props.data.name}</h2>
                        <p className={css.description}>{props.data.description}</p>
                    </div>
                    <i className={`${css.info} fa-solid fa-circle-info`}></i>
                    
                </div>
                <div className={css.body}>
                    <div className={css.slide}>
                        <div className={[css.invite, css.form_block].join(' ')}>
                            <div className={css.class_code}>
                                <div className={css.class_code_header}>
                                    <h4>Code:</h4>
                                    <i onClick={(evt) => menuSwitch(true, {x: evt.clientX, y: evt.clientY})} className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                                <p className={[css.code, css.loading].join(' ')}>{props.data.code}</p>
                            </div>
                        </div>  
                    </div>
                    <div className={css.main}>
                        <div className={[css.members, css.form_block].join(' ')}>
                            <HiddenList label={`Members: ${10}`} icon='fa-solid fa-users' />
                        </div>
                        <div className={[css.tests, css.form_block].join(' ')}>
                            <HiddenList label={`Tests: ${10}`} icon='fa-solid fa-file' />
                        </div>
                    </div>
                </div>
                <div className={css.btns}>
                    <Button text='Settings' onClick={()=>setPopup({active: true})} icon='fa-solid fa-gear' />
                </div>
            </div>
            <Popup popup={popup}>
                <ClassSettings setPopup={setPopup} data={props.data} set={props.set}/>
            </Popup>
            <Menu size={2} menu={menu} items={items}/>
            <Alert hook={alertHook}/>
        </>
        
    )
}
