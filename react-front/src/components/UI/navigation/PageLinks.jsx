import css from './css/link-switcher.module.css'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'



const cx = classNames.bind(css)

function PageLinks({ links, className }) {

    const { pathname } = useLocation()

    const linkStyle = (to) => cx('link', { choosen: pathname === to })    
    

    return (
        <div className={[css.block, className].join(' ')}>
            {links.map(({ to, text}, index) =>
                <Link key={index} className={linkStyle(to)} to={to}>{text}</Link>
            )}
        </div>
    )
}

export default PageLinks
