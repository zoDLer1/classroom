import css from './css/checkbox.module.css'
import _uniqueId from 'lodash/uniqueId';
import { useState } from 'react';


export default ({text, children, name, type="checkbox", ...props}) => {
    const [id] = useState(_uniqueId('prefix-'))
    return (
        <div className={css.block}>
            <input {...props} name={name} id={id} type={type} hidden/>
            <label className={css.body} htmlFor={id}>{text} {children}</label>
        </div>
    )
}