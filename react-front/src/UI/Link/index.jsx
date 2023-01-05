
import css from './css/link.module.css'
import { Link } from "react-router-dom"

export default (props) => {
    return (
        <Link className={css.block} to={props.to}>{props.text}</Link>
    )
}