import { Link } from "react-router-dom"



function DefaultLink ({disabled=false, to, text, children, ...props}) {

    return (
        
        <>
            {!disabled 
                ? <Link {...props} to={to}>{children} {text}</Link>
                : <div {...props}>{children} {text}</div>
            } 
        </>
          
    )
}

export default DefaultLink