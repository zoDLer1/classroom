
import css from './css/link.module.css'
import DefaultLink from '../defaultLink'

const Link = ({to, text, children, ...props}) => {

    return (
        <DefaultLink {...props} className={css.block} to={to}>{children} {text}</DefaultLink>
    )
}
export default Link 