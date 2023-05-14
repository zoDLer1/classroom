import css from './css/link-switcher.module.css'
import { Link } from 'react-router-dom'

function LinkSwither({ links, className, selected }) {
    return (
        <div className={[css.block, className].join(' ')}>
            {links.map((link, index) =>
                <Link key={index} className={`${css.link} ${selected === index ? css.choosen : ''}`} to={link.to}>{link.text}</Link>
            )}
        </div>
    )
}

export default LinkSwither
