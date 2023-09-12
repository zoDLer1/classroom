import { useNavigate } from "react-router-dom"
import { useAlert } from "./useGlobalUI"


export const useInfoAndRedirect = (isRedirect = true) => {
    const alert = useAlert()
    const navigate = useNavigate()

    const redirect = (info) => {
        alert.show(info)
        if (isRedirect){
            navigate('/classes')
        }
    }
    return redirect
}