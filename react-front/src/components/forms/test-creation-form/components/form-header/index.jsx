import css from './css/form-header.module.css'
import Input from 'UI/Input'
import Audio from 'UI/Audio'
import Select from 'UI/Select'

export default (props) =>  {
    const types = [
        {name:'Simple', id: 1}, 
        {name: 'By time', id: 2}
    ]
    const setType = (type) =>{
        props.set('type', type)
        if (type.id === 1){
            props.rmt()
        }
    }

    return (
        <div className={css.block}>
            <Audio />
            <Input value={props.name} onChange={ (evt) => props.set('name', evt.target.value) } name="name" placeholder="Test name" icon='fa-solid fa-pen'/>
            <Input value={props.description} onChange={ (evt) => props.set('description', evt.target.value) } name="decsription" placeholder="Decsription" icon='fa-solid fa-pen'/>
            <Select value={props.type.name} select={(obj) => props.st(obj)} options={types} name="type" placeholder="Test type" icon='fa-solid fa-list-ol'/>
            {props.type.id === 2 && <Input type='number' name="time"  onChange={ (evt) => props.set('time', Number(evt.target.value)) }  value={props.time} placeholder="Time" icon='fa-regular fa-clock'/>}
        </div>
    )
}

