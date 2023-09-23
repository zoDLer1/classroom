import css from "./css/input.module.css";
import { useId } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Error from "../notices/Error";
import classNames from "classnames/bind";


const cx = classNames.bind(css);


function Input({ field, error, touched, children, icon, styleType = 'default', labelStyle, readOnly = false, placeholder, ...props }) {
    const inputClasses = cx({ hasError: error && touched, readOnly }, styleType)
    const id = useId()

    

    return (
        <div className={inputClasses}>
            {readOnly ? <h3 className={[css.label, labelStyle].join(' ')}>{field.value}</h3>
                : <div className={css.block}>
                    <div className={css.main}>
                        <div className={css.body}>
                            <div className={css.icon}>
                                {icon && <FontAwesomeIcon icon={icon} size="sm" />}
                            </div>
                            <div className={css.inputWrapper}>
                                <input autoComplete="off" id={id} {...props} {...field} />
                                <label htmlFor={id}>
                                    <p className={css.placeholder}>{placeholder}</p>
                                </label>
                            </div>
                        </div>
                        <div className={css.notices}>
                            {children}
                            {(error && touched) && <Error message={error} />}
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default Input