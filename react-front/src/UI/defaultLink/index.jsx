import { Link } from "react-router-dom"



function DefaultLink ({to, text, children, ...props}) {

    return (
        
        <>
            {to 
                ? <Link {...props} to={to}>{children} {text}</Link>
                : <p {...props} to={to}>{children} {text}</p>
            } 
        </>
          
    )
}

export default DefaultLink