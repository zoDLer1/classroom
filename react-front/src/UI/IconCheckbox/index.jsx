import css from "./css/iconCheckbox.module.css";

export default (props) => {
    return (
        <div className={css.block}>
            <input id={`${props.name}-icon`} type="checkbox" hidden/>
            <label htmlFor={`${props.name}-icon`} onClick={(evt) => props.func(evt)}>
                <i className={`${css.icon} ${props.icon}`}></i>
            </label>
        </div>
    );
}

