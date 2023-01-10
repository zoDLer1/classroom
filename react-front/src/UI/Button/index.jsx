import css from './css/button.module.css'

export default ({text, ...props}) =>  {
    return (
        <button {...props} className={css.block}>
            {text}
        </button>
    )
}
