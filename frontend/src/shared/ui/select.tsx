import { InputHTMLAttributes, useId, useMemo, type FC } from 'react';
import { FieldProps } from 'formik';
import classnames from 'classnames/bind';
import { faCircleExclamation } from '@packages/icons/solid';
import { Icon } from '@packages/icons';
import css from './inputs-style.module.css';
import { WithIcon } from '../types';
import { ErrorPopup, type IOption, Option } from '../base-components';
import { useOpen } from '@shared';

const cx = classnames.bind(css);

interface ISelectProps extends InputHTMLAttributes<HTMLInputElement> {
    options: IOption[];
}

export const Select: FC<WithIcon<ISelectProps & FieldProps<number>>> = ({ icon, placeholder, field: { value: fieldValue, onBlur, name }, form: { errors, touched, setFieldValue }, children, className, options, ...props }) => {
    const id = useId();
    const error = errors[name] as string;
    const isTouched = touched[name] as boolean;
    const value = useMemo(
        () => options.find((option) => option.id === fieldValue),
        [options, fieldValue],
    );

    const onSelect = (optionId: number) => {
        setFieldValue(name, optionId);
        close();
    };
    const { isOpen, close, open, stopCloseItem } = useOpen();

    return (
        <div ref={stopCloseItem} className={cx('block', 'default', { hasError: error })}>
            <div className={css.icon}>
                {icon}
            </div>

            <label htmlFor={id} className={css.placeholder}>
                {placeholder}
            </label>

            <input
                id={id}
                type='text'
                onFocus={() => open()}
                onBlur={onBlur}
                name={name}
                onChange={() => null}
                value={value ? value.name : ''}
                className={cx('input', className)}
                {...props}
            />

            {Boolean(isOpen) && (
                <div className={css.options}>
                    <div className='py-2 px-3'>
                        {options.map((option) => (
                            <Option onSelect={onSelect} key={option.id} {...option} />
                        ))}
                    </div>
                </div>
            )}

            {Boolean(error) && Boolean(isTouched) && (
                <Icon icon={faCircleExclamation} className='text-custom-red-400' />
            ) }

            <ErrorPopup text={error} className={css.errorPopup} />
            {children}
        </div>
    );
};
