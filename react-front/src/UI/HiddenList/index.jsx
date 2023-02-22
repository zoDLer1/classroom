import css from './css/HiddenList.module.css'
import { useState } from 'react'
import header from 'components/header'



export default ({list=[], label, labelEmptyList='List is empty', Elem, ...props }) =>  {

    const icons = {
        true: 'fa-angle-down',
        false: 'fa-angle-up'
    }

    const [hidden, setHidden] = useState(true)

    const toggle = () =>{
        setHidden(!hidden)
    }



    return (
        <div className={css.block}>
            <div  className={css.body}>
                <div onClick={toggle} className={css.header}>
                    <div className={css.label}>
                        <i className={`${props.icon} ${css.icon}`}></i>
                        <h3>{label}</h3>
                    </div>
                    
                    <i className={`fa-solid ${icons[hidden]}`}></i>
                </div>
                {!hidden && <div className={css.list}>
                    {list.length 
                    ? list.map(item => <Elem data={item}></Elem>)
                    : <p className={css.empty}>{labelEmptyList}</p>}
                </div>}
                
            </div>
        </div>
    )
}
