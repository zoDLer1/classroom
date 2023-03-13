import css from './link-switcher.module.css'
import DefaultLink from 'UI/defaultLink'

function LinkSwither({ links, className, selected }) {
    return (
        <div className={[css.block, className].join(' ')}>
            { links.map((link, index) => <DefaultLink key={index} text={link.text} className={`${css.link} ${selected === index ? css.choosen : ''}`} to={link.to}></DefaultLink>) }
        </div>
    )
}

export default LinkSwither
