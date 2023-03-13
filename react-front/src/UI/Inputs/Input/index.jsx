import css from "./input.module.css";
import _uniqueId from 'lodash/uniqueId';
import { useState } from "react";




function Input ({ads, icon, onClick, placeholder, placeholderOffset=0, reg, onChange=()=>null, ...props}){

    const ChangeValue = (evt) =>{
       
        if (reg === undefined || reg.test(evt.target.value) || evt.target.value === '')
            onChange(evt)
    }

    


    const [id] = useState(_uniqueId('input-'))
    return (
        
        <div onClick={onClick} className={[css.block].join(' ')}>
            <div className={css.body}>
                <div className={css.icon}>
                    {icon}
                </div>
                
                <input id={id} onChange={ChangeValue} {...props} required />
                <label htmlFor={id}>
                    <p style={placeholderOffset ? {left: 35+placeholderOffset} : {}} className={css.placeholder}>{placeholder}</p>
                </label>
            </div>
            <div className={css.ads}>
                {ads}
            </div>
            
        </div>
    )
}

export default Input