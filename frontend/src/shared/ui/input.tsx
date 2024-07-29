import { InputHTMLAttributes, type FC, useId } from 'react';
import { FieldProps } from 'formik';
import { Icon } from '@packages/icons';
import classnames from 'classnames/bind';
import css from './inputs-style.module.css';
import { faCircleExclamation } from '@packages/icons/solid';
import { WithIcon } from '../types';
import { ErrorPopup } from '../base-components';

const cx = classnames.bind(css);

export const Input: FC<WithIcon<InputHTMLAttributes<HTMLInputElement>> & FieldProps<string>> = ({ icon, placeholder, field, form: { errors, touched }, children, className, ...props }) => {
    const id = useId();
    const error = errors[field.name] as string;
    const isTouched = touched[field.name] as boolean;

    return (
        <div className={cx('block', 'default', { hasError: error })}>
            <div className={css.icon}>
                {icon}
            </div>

            <label htmlFor={id} className={css.placeholder}>
                {placeholder}
            </label>

            <input
                id={id}
                type='text'
                className={cx('input', className)}
                {...field}
                {...props}
            />

            {Boolean(error) && Boolean(isTouched) && (
                <Icon icon={faCircleExclamation} className='text-custom-red-400' />
            )}

            <ErrorPopup text={error} className={css.errorPopup} />
            {children}
        </div>
    );
};
