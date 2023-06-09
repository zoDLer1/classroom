import { Link } from "react-router-dom"



function DefaultLink ({disabled=false, to, text, children, ...props}) {

    return (
        
        <>
            {!disabled 
                ? <Link {...props} to={to}>{children} {text}</Link>
                : <p {...props}>{children} {text}</p>
            } 
        </>
          
    )
}

export default DefaultLink