import css from "./css/iconCheckbox.module.css";

export default (props) => {
    return (
        <div className={css.block}>
            <input id={`${props.name}-icon`} type="checkbox" hidden/>
            <label for={`${props.name}-icon`} onClick={(evt) => props.func(evt)}>
                <i className={`${css.icon} fa-regular fa-eye-slash`}></i>
            </label>
        </div>
    );
}

