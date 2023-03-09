import css from './switch.module.css'
import { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';


const Switch = ({text, ...props}) =>  {
    const [id] = useState(_uniqueId('prefix-'))

    return (
        <div className={css.block}>
            <label className={css.elem} htmlFor={id}></label>
            <label htmlFor={id} className={css.text}>{text}</label>
            <input  {...props} id={id} hidden type="checkbox" />
        </div>
    )
}
export default  Switch