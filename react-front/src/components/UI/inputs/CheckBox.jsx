import css from './css/checkbox.module.css'
import { useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckBox = ({ children, color='light',  ...props }) => {
    const id = useId()
    return (
        <div className={css.block}>
            <input {...props} id={id} type="checkbox" hidden />
            <label className={css.body} htmlFor={id}>
                <div className={css.checkbox}>
                    <FontAwesomeIcon icon={faCheck} color='var(--light-color)' />
                </div>
                {children}
            </label>
        </div>
    )
}
export default CheckBox