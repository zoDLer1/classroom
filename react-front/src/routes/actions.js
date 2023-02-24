import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function redirect(to) {
    return () =>{
        const navigate = useNavigate()
        useEffect(()=>{
            navigate(to)
        }, [])
    }   
}


