import { Link } from "react-router-dom"


const HeaderNavigationItem = (props) =>  {
    return (
        <Link to={props.to} className='flex items-center gap-[10px]'>
            {props.icon && 
                <i className={props.icon}></i>
            }
            <span className='text-lg'>{props.text}</span>
            
        </Link>
    )
}

export default HeaderNavigationItem