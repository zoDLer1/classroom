import css from "./input.module.css";
import _uniqueId from 'lodash/uniqueId';
import { useId } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Input({ notices, icon, placeholder, ...props }) {
    const id = useId()
    return (
        <div className={[css.block].join(' ')}>
            <div className={css.body}>
                <div className={css.icon}>
                    <FontAwesomeIcon icon={icon} size="sm" />
                </div>
                <div className={css.input_wrapper}>
                    <input autoComplete="off" id={id} {...props} required />
                    <label htmlFor={id}>
                        <p className={css.placeholder}>{placeholder}</p>
                    </label>
                </div>
            </div>
            <div className={css.notices}>
                {notices}
            </div>
        </div>
    )
}
export default Input