import css from "./css/input.module.css";
import { useId } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Error from "../notices/Error";
import Warning from "../notices/Warning";

function Input({ children, icon, placeholder, error, warning, ...props }) {
    const id = useId()

    const InputStyles = {
        hasError: (error) => error ? css.hasError : null
    }
    return (
        <div className={[css.block, InputStyles.hasError(error)].join(' ')}>
            <div className={css.body}>
                <div className={css.icon}>
                    <FontAwesomeIcon icon={icon} size="sm" />
                </div>
                <div className={css.inputWrapper}>
                    <input autoComplete="off" id={id} {...props} required />
                    <label htmlFor={id}>
                        <p className={css.placeholder}>{placeholder}</p>
                    </label>
                </div>
            </div>
            <div className={css.notices}>
                {children}
                {error && <Error message={error} />}
                {warning && <Warning message={warning} />}
                
            </div>
        </div>
    )
}

export default Input