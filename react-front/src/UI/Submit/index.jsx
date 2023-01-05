import css from './css/submit.module.css'


export default (props) => {
    return (
        <div className={css.block}>
            <input id="submit" hidden type="submit"/>
            <label for="submit">{props.text}</label>
        </div>
    )
}