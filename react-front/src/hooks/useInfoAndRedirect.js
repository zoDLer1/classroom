import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalUIContext } from "contexts/GlobalUIContext"


export const useInfoAndRedirect = (isRedirect = true) => {
    const { alert } = useContext(GlobalUIContext)
    const navigate = useNavigate()

    const redirect = (info) => {
        alert.show(info)
        if (isRedirect){
            navigate('/classes')
        }
    }
    return redirect
}