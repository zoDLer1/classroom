import css from './css/switch.module.css'
import { useId } from 'react';


const Switch = ({text, ...props}) =>  {
    const id = useId()

    return (
        <div className={css.block}>
            <label className={css.elem} htmlFor={id}></label>
            <label htmlFor={id} className={css.text}>{text}</label>
            <input  {...props} id={id} hidden type="checkbox" />
        </div>
    )
}
export default  Switch