import css from './css/button.module.css'

export default ({text, style, icon, event, ...props}) =>  {





    return (
        <button style={style} {...props} className={css.block}>
            {event && <div className={css.event}></div>}
            {icon && <i className={`${css.icon} ${icon}`}></i>}
            {text}
        </button>
    )
}
