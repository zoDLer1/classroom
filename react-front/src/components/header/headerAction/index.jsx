import css from './headerAction.module.css'

function HeaderAction({ icon, text, action }) {
    return (
        <div className={css.block} onClick={action}>
            <i className={`${css.icon} ${icon}`}></i>
            <p className={css.text}>{text}</p>
        </div>
    )
}

export default HeaderAction
