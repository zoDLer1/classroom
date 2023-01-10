import css from './css/button.module.css'

export default ({text, ...props}) =>  {
    return (
        <button className={css.block}>
            {text}
        </button>
    )
}
