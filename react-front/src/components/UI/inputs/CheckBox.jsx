import css from './css/checkbox.module.css'
import { useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

const cx = classNames.bind(css);

const CheckBox = ({ field: { value, onChange, ...field }, form, children, onCustomChange, error, touched, checkboxSlyle = 'default', type = "checkbox", color = 'light', ...props }) => {
    const id = useId()
    const checkboxStyles = cx('block', checkboxSlyle, type, { hasError: error && touched })


    return (
        <div className={checkboxStyles}>
            <input checked={value} {...field} onChange={onCustomChange ?? onChange} {...props } type='checkbox' id={id} hidden />
            <label className={css.body} htmlFor={id}>
                <div className={css.button}>
                    <div className={css.icon}>
                        <FontAwesomeIcon icon={checkboxSlyle !== 'error' ? faCheck : faXmark} color='var(--light-color)' />
                    </div>
                </div>
                {children}
            </label>
        </div>
    )
}
export default CheckBox