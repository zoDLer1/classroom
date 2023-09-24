import { Link } from "react-router-dom"


const HeaderNavigationItem = (props) =>  {
    return (
        <Link to={props.to} className='flex-ic gap-2.5'>
            {props.icon && 
                <i className={props.icon}></i>
            }
            <span className='text-lg'>{props.text}</span>
            
        </Link>
    )
}

export default HeaderNavigationItem