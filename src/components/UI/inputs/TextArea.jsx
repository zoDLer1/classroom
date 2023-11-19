import css from './css/textarea.module.css'
import { useId } from 'react';


function TextArea({ field, form: { isSubmitting }, placeholder, readOnly, rows }) {
    const id = useId()
    return readOnly
        ? <p className={css.label}>{field.value}</p>
        : <div className={css.block}>
            <textarea className={css.input} {...field} rows={rows} disabled={isSubmitting} required id={id}></textarea>
            <label htmlFor={id}>
                <p className={css.placeholder}>{placeholder}</p>
            </label>
        </div>

}

export default TextArea
