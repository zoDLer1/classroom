import css from './css/checkbox.module.css'
import { useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const CheckBox = ({ children, checkboxSlyle='default', color='light',  ...props }) => {
    const id = useId()
    return (
        <div className={[css.block, css[`style-${checkboxSlyle}`]].join(' ')}>
            <input {...props} id={id} type="checkbox" hidden />
            <label className={css.body} htmlFor={id}>
                <div className={css.checkbox}>
                    <FontAwesomeIcon icon={checkboxSlyle !== 'error' ? faCheck: faXmark} color='var(--light-color)' />
                </div>
                {children}
            </label>
        </div>
    )
}
export default CheckBox