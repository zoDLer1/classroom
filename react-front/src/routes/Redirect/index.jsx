import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function RedirectComponent({to}) {
    const navigate = useNavigate()
    useEffect (()=>{
        navigate(to)
    })
}
const Redirect = (to) => ({Elem: RedirectComponent, props: {to}})

export default Redirect

