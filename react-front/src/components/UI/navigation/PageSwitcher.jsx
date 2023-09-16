import css from './css/page-switcher.module.css'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(css);


export default function PageSwitcher({ pages, current }) {

    const navigate = useNavigate()

    return (
        <div className={css.block}>
            {pages.map(({ text, url }, index) =>
                <div
                    onClick={() => navigate(url)}
                    key={index}
                    className={cx('item', { selected: current === index })}
                >
                    {text}
                </div>)}
        </div>

    )
}
