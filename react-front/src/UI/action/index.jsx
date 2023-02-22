import css from './css/action.module.css'



export default ({text, icon}) =>  {
    return (
        <div className={css.block}>
            {icon && <i className={`${css.icon} ${icon}`}/>}
            <p className={css.text}>{text}</p>
            
        </div>
    )
}
