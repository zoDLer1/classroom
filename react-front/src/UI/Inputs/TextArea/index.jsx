import css from './textarea.module.css'
import _uniqueId from 'lodash/uniqueId';
import { useState } from 'react';

function TextArea({placeholder, ...props}) {
    const [id] = useState(_uniqueId('textarea-'))
    return (
        <div className={css.block}>
            <textarea className={css.input} {...props} name="" required id={id}></textarea>
            <label htmlFor={id}>
                <p className={css.placeholder}>{placeholder}</p>
            </label>
        </div>
        
    )
}

export default TextArea
