import css from './join-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Inputs/Input'
import Action from 'UI/Inputs/action'
import { useState } from 'react'



function JoinClassForm() {

    const [code, setCode] = useState('')

    return (
        
        <div onClick={evt=>evt.stopPropagation()} className={[formCss.block, formCss.flex, css.block].join(' ')}>


            <div className={css.header}>
                <p className={css.title}>Код класса</p>
                <p className={css.description}>Код класса можно узнать у преподавателя.</p>
            </div>
            <Input value={code}  onChange={(evt)=>setCode(evt.target.value)} placeholder={'Код класса'} icon='fa-solid fa-users'/>
            <div className={css.actions}>
                <Action text={'Найти'}  disabled={code.length !== 6} icon='fa-solid fa-magnifying-glass'/>
            </div>
        </div>  
    )
}

export default JoinClassForm
