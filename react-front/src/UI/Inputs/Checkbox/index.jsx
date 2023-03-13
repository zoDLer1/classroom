import css from './checkbox.module.css'
import _uniqueId from 'lodash/uniqueId';
import { useState } from 'react';


const CheckBox = ({text, children, name, color='default', type="checkbox", ...props}) => {
    const [id] = useState(_uniqueId('checkbox-'))
    return (
        <div className={css.block}>
            
            <input {...props} name={name} id={id} type={type} hidden/>
            <label className={[css.body, css[color]].join(' ')} htmlFor={id}>{text} {children}<i className={`${css.icon} fa-solid fa-check`}></i></label>
        </div>
    )
}
export default CheckBox