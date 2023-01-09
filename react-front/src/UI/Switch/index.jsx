import css from './css/switch.module.css'
import { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';


export default ({text, ...props}) =>  {
    const [id] = useState(_uniqueId('prefix-'))

    return (
        <div className={css.block}>
            <label className={css.elem} for={id}></label>
            <label for={id} className={css.text}>{text}</label>
            <input  {...props} id={id} hidden type="checkbox" />
        </div>
    )
}
