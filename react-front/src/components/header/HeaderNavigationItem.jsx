import css from './css/navigationItem.module.css'
import { Link } from "react-router-dom"


const HeaderNavigationItem = (props) =>  {
    return (
        <Link to={props.to} className={css.block}>
            {props.icon && 
                <i className={props.icon}></i>
            }
            <span className={css.text}>{props.text}</span>
            
        </Link>
    )
}

export default HeaderNavigationItem