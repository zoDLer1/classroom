import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'



function PageLinks({ links }) {

    const { pathname } = useLocation()

    const linkStyle = (to) => classNames('cursor-pointer', pathname !== to ? 'text-primary-faded' : 'text-primary')    
    
    return (
        <div className='flex-ic-je w-full gap-9 mb-8'>
            {links.map(({ to, text}, index) =>
                <Link key={index} className={linkStyle(to)} to={to}>{text}</Link>
            )}
        </div>
    )
}

export default PageLinks
