import css from './css/select.module.css'
import Input  from 'UI/Input'
import IconCheckbox from 'UI/IconCheckbox'
import { useState } from 'react'


export default (props) =>  {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [icon, setIcon] = useState('down')

    const toggle = () =>{
        setIcon(!open ? 'up' : 'down')
        setOpen(!open)
    }
    const select = (option) =>{
        setValue(option.name)
        toggle()
    } 
        

    return (
        <div className={css.block}>
            <Input onClick={toggle} value={value} disabled name={props.name} placeholder={props.placeholder} icon={props.icon} ads={[<IconCheckbox name={props.name} icon={`fa-solid fa-angle-${icon}`} func={()=>''} />] } />


            {open &&
            <div className={css.options} >
                {props.options.map(item => 
                <div onClick={() => select(item)} className={css.option}>
                    <div className={css.optionContent}>{item.name}</div>
                    
                </div>)}
            </div>
            }
        </div>
    )
}

// 