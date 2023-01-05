import css from './css/navlink.module.css'
import { Link } from "react-router-dom"

export default (props) =>  {
    return (
        <Link className={`${css.block} ${props.isChoosen ? css.choosen : ''}`} to={props.to}>{props.text}</Link>
    )
}

