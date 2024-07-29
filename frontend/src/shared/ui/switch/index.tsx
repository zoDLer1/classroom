import { type FC } from 'react';
import { Link, type LinkProps, useLocation } from 'react-router-dom';
import css from './style.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(css);

interface ILinkProps {
    name: string;
}

type ILink = LinkProps & React.RefAttributes<HTMLAnchorElement> & ILinkProps;

interface ISwitchProps {
    links: ILink[];
}

export const Switch: FC<ISwitchProps> = ({ links }) => {
    const { pathname } = useLocation();

    return (
        <div className={cx('block')}>
            {links.map(({ name, ...link }) => {
                return (
                    <Link className={cx('link', { selected: link.to === pathname })} key={link.to as string} {...link}>
                        {name}
                    </Link>
                );
            })}
        </div>
    );
};
