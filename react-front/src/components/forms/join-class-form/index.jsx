import css from './join-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Inputs/Input'
import Action from 'components/UI/inputs/Action'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import ClassServise from 'services/ClassSevrice'

function JoinClassForm({close}) {

    const addMember =  async () =>{
        await ClassServise.member(code, ()=>close(), ()=>'')
    }


    const [code, setCode] = useState('')

    return (
        
        <div onClick={evt=>evt.stopPropagation()} className={[formCss.block, formCss.flex, css.block].join(' ')}>


            <div className={css.header}>
                <p className={css.title}>Код класса</p>
                <p className={css.description}>Код класса можно узнать у преподавателя.</p>
            </div>
            <Input value={code}  onChange={(evt)=>setCode(evt.target.value)} placeholder={'Код класса'} icon={<FontAwesomeIcon icon={solid('users')} size='sm' />}/>
            <div className={css.actions}>
                <Action text={'Найти'} onClick={addMember} disabled={code.length !== 36} icon='fa-solid fa-magnifying-glass'/>
            </div>
        </div>  
    )
}

export default JoinClassForm
