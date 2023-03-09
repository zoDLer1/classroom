import css from './button.module.css'

const Button = ({text, style, icon, event, onClick=()=>null, ...props}) =>  {


    return (
        <button onClick={(evt)=>{evt.preventDefault(); onClick(evt)}} style={style} {...props} className={css.block}>
            {event && <div className={css.event}></div>}
            {icon && <i className={`${css.icon} ${icon}`}></i>}
            {text}
        </button>
    )
}
export default Button