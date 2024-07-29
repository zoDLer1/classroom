import { ButtonHTMLAttributes, PropsWithChildren, type FC } from 'react';
import classNames from 'classnames/bind';
import { Icon } from '@packages/icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { WithIcon } from '../../types';
import css from './style.module.css';

const cx = classNames.bind(css);

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export const Button: FC<WithIcon<PropsWithChildren<IButtonProps>>> = ({ children, isLoading = false, icon, ...props }) => {
    return (
        <button className={cx('block')} disabled={isLoading} {...props}>
            {!isLoading
                ? (
                    <>
                        {icon}
                        {children}
                    </>
                )
                : <Icon icon={faSpinner} size='lg' spinPulse={true} />}

        </button>
    );
};
