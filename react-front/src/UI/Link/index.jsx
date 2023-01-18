
import css from './css/link.module.css'
import { Link } from "react-router-dom"

export default ({to, text, children, ...props}) => {
    return (
        <>
            {to 
                ? <Link {...props} className={css.block} to={to}>{children} {text}</Link>
                : <p {...props} className={css.block} to={to}>{children} {text}</p>
            } 
        </>
          
    )
}