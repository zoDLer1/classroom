import css from './css/link.module.css'
import { Link as ReactLink } from 'react-router-dom'


const Link = ({to, text, ...props}) => {
    return (
        <ReactLink {...props} className={css.block} to={to}>{text}</ReactLink>
    )
}

export default Link 