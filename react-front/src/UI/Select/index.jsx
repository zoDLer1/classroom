import css from './css/select.module.css'
import Input  from 'UI/Input'
import IconCheckbox from 'UI/IconCheckbox'
import Option from 'UI/Option'
import { useState } from 'react'


function Select (props){

    const [open, setOpen] = useState(false)
    // const [value, setValue] = useState(props.value)
    const [icon, setIcon] = useState('down')

    const toggle = () =>{
        setIcon(!open ? 'up' : 'down')
        setOpen(!open)
    }
    const select = (option) =>{
        // setValue(option.name)
        if (props.select){
            props.select(option)
        }
        toggle()
    } 
        

    return (
        <div className={css.block}>
            <Input onClick={toggle} value={props.value === undefined ? '' : props.value} disabled name={props.name} placeholder={props.placeholder} icon={props.icon} ads={<IconCheckbox name={props.name} icon={`fa-solid fa-angle-${icon}`} func={()=>''} /> } />


            {open &&
            <div className={css.options} >
                {props.options.map(item => 
                    <Option key={item.id} data={item} onSelect={() => select(item)}/>
                )}
            </div>
            }
        </div>
    )
}

export default Select
