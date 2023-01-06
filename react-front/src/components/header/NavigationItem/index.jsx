import css from './css/navigationItem.module.css'
import { Link } from "react-router-dom"


export default (props) =>  {
    return (
        <Link to={props.to} className={css.block}>
            {props.icon && 
                <i className={props.icon}></i>
            }
            <span className={css.text}>{props.text}</span>
            
        </Link>
    )
}

