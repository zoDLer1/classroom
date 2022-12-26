import { Link } from "react-router-dom"



export default (props) => {
    return (
        <div class="form__page-links form__containter">
            <Link to='/register' class={"form__page-link " + String(props.register)}>Register</Link>
            <Link to='/login' class={"form__page-link " + String(props.login)}>Sign in</Link>
        </div>
        )
}