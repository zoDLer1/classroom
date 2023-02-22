import css from './css/class-settings.module.css'
import formCss from 'components/forms/css/form.module.css'
import Select from 'UI/Select'
import Input from 'UI/Input'
import { useState } from 'react'
import Submit from 'UI/Submit'
import Checkbox from 'UI/Checkbox'



export default (props) =>  {
    const [types, setTypes] = useState([
        {id: 1, name: 'closed'},
        {id: 2, name: 'opened'},
        {id: 3, name: 'by invintation'}
    ])
    const [classData, setClassData] = useState(props.data)

    const UpdateData = (evt) =>{
        evt.preventDefault()
        props.set(classData)
        props.setPopup({active:false})
    }

    return (
        <form onSubmit={UpdateData} className={[formCss.block, css.block, formCss.flex].join(' ')}>
            <div className={[formCss.flex, css.body].join(' ')}>
                <Input value={classData.name} onChange={(evt)=> setClassData({...classData, name: evt.target.value})} icon='fa-solid fa-pen' />
                <Input value={classData.description} onChange={(evt)=> setClassData({...classData, description: evt.target.value})} icon='fa-solid fa-pen' />
                <Select icon='fa-solid fa-list-ol' select={(obj) => setClassData({...classData, type: obj})} value={classData.type.name}  options={types} />
                <div className={css.checkboxes}>
                    <Checkbox text='Allow viewing'/>
                    <Checkbox text='Allow something' />
                </div>
                
            </div>
            <Submit text='save'/>
        </form>
    )
}
