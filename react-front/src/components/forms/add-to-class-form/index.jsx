import css from './css/add-to-class-form.module.css'
import formCss from 'components/forms/css/form.module.css'
import Submit from 'UI/Submit'
import Select from 'UI/Select'
import { useState } from 'react'




function AddToClassForm ({close, current }){
    const [classes] = useState([
        { name: 'Claswesardfawserfawsfs 1', id: 1 }, 
        { name: 'Class 2', id: 2 }
    ])
    const [class_, setClass] = useState({})

    const submit = (evt) =>{
        evt.preventDefault()
        close()
    }

    return (
        <form onClick={(evt) => evt.stopPropagation()} onSubmit={submit} className={[formCss.block, formCss.flex].join(' ')}>
            <h2 className={css.label}>
                <span>Add test to class</span>  
                {class_ && <span className={css.class_}>{class_.name}</span> }
            </h2>
            <div className={[formCss.inputs, css.inputs].join(' ')}>
                <Select select={(obj)=>{setClass(obj)}} value={class_.name} options={classes} name="class" placeholder="Class name" icon='fa-solid fa-users'></Select>
            </div>
            <div className={css.submit}>
                <Submit text='create'/>
            </div>
        </form>
    )
}
export default AddToClassForm