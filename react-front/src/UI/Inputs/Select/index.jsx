import css from './select.module.css'
import Input  from 'UI/Inputs/Input'
import IconCheckbox from 'UI/IconCheckbox'
import Option from 'UI/Inputs/Select/Option'
import { useState } from 'react'
import { useOpen } from 'hooks/useOpen'


function Select (props){

    const {condition, close, toggle} = useOpen()
    const [icon] = useState('down')

  
    const select = (option) =>{
        if (props.select){
            close()
            props.select(option)
        }

    } 
        

    return (
        <div className={css.block}>
            <Input onClick={toggle} onChange={()=>null} value={props.value === undefined ? '' : props.value} name={props.name} placeholder={props.placeholder} icon={props.icon} ads={<IconCheckbox name={props.name} icon={`fa-solid fa-angle-${icon}`} func={()=>''} /> } />
            {condition &&
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
