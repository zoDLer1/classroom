import { RefAttributes, type FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

export const Link: FC<LinkProps & RefAttributes<HTMLAnchorElement>> = ({ className, ...props }) => {
    return (
        <RouterLink {...props} className={classNames('text-primary-300', className)} />
    );
};
