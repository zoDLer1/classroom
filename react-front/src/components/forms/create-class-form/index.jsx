import css from './create-class.module.css'
import formCss from 'components/forms/css/form.module.css'
import Input from 'UI/Inputs/Input'
import TextArea from 'UI/Inputs/TextArea'
import Action from 'UI/Inputs/action'
import { useState } from 'react'
import ClassServise from 'services/ClassSevrice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'




function CreateClassForm({close}) {
    const navigate = useNavigate()

    const [newClass, setClass] = useState({
        name: '',
        description: '',
        subject: '',
    })
    const onSubmit = async () =>{
        try{
            
            await ClassServise.create(newClass)
        }
        catch{
            navigate('/serverunavailable')
        }
        
        close()

    }

    return (
        <div onClick={evt=>evt.stopPropagation()} className={[formCss.block, formCss.flex].join(' ')}>
            <div className={css.inputs}>
                <Input icon={<FontAwesomeIcon icon={solid('pen')} size="sm" />} value={newClass.name} onChange={(evt)=>setClass({...newClass, name: evt.target.value})} placeholder={'Название'}/>
                <Input icon={<FontAwesomeIcon icon={solid('cube')} size="sm" />} value={newClass.subject} onChange={(evt)=>setClass({...newClass, subject: evt.target.value})} placeholder={'Предмет'}/>
                <div className={css.textarea}>
                    <TextArea value={newClass.description} onChange={(evt)=>setClass({...newClass, description: evt.target.value})} rows="7" placeholder={'Описание'} />
                </div>
                <div className={css.actions}>
                    <Action icon={'fa-solid fa-ban'}  onClick={close} styleAction={'error'} text={'Отменить'} />
                    <Action icon={'fa-solid fa-plus'} onClick={onSubmit} text={'Создать'} />
                    
                </div>
            </div> 
            
        </div>
    )
}

export default CreateClassForm
