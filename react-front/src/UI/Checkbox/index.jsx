import css from './css/checkbox.module.css'

export default (props) => {
    return (
        <div className={css.block}>
            <input id="agree" type="checkbox" hidden/>
            <label className={css.body} for="agree">{props.text}</label>
        </div>
    )
}