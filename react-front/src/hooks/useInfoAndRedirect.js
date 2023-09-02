import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { useAlert } from "./globalUIContent/useGlobalUI"


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