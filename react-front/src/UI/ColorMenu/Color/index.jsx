import css from './css/color.module.css'
import _uniqueId from 'lodash/uniqueId';


export default ({value, ...props}) =>  {
    const id = _uniqueId('color-')
    return (
        
        <div className={css.block}>
            <input data-color={value} className={css.input} id={id} {...props} type='radio' hidden />
            <label style={{backgroundColor: value}} className={css.color} htmlFor={id}>
                <i className={`${css.checked} fa-solid fa-check`}></i>
            </label> 
        </div>
    )
}
