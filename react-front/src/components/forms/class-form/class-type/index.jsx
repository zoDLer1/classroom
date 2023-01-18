import css from './css/class-type.module.css'

export default (props) =>  {
    const icons = [
        "fa-solid fa-lock",
        "fa-solid fa-lock-open",
        "fa-solid fa-handshake-simple"
    ]



    return (
        <div className={[css.block, css[props.type.name.replace(' ', '_')]].join(' ')}>
            <i className={`${css.icon} ${icons[props.type.id-1]}`}></i>
            <p className={css.label}>{props.type.name}</p>
        </div>
    )
}
