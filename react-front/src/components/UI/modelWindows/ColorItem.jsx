import css from './css/color.module.css'
import { useId } from 'react'


const ColorItem = ({value, ...props}) =>  {
    const id = useId()
    return (
        
        <div className={css.block}>
            <input data-color={value} className={css.input} id={id} name="color-radio" {...props} type='radio' hidden />
            <label style={{backgroundColor: value}} className={css.color} htmlFor={id}>
                <i className={`${css.checked} fa-solid fa-check`}></i>
            </label> 
        </div>
    )
}
export default ColorItem