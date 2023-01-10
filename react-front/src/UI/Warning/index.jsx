import css from './css/warning.module.css'

export default (props) =>  {
    return (
        <div className={css.block}>
            <i className={`${css.icon} fa-solid fa-circle-exclamation`}></i>
            <div className={css.message}>{props.text}</div>
        </div>
        
    )
}
