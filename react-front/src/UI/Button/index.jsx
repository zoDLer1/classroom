import css from './css/button.module.css'

export default ({text, bg, icon, event, ...props}) =>  {





    return (
        <button style={{backgroundColor: bg}} {...props} className={css.block}>
            {event && <div className={css.event}></div>}
            {icon && <i className={`${css.icon} ${icon}`}></i>}
            {text}
        </button>
    )
}
