import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const usePath = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [currentPath, setCurrentPath] = useState()
    const [historyPath, setHistoryPath] = useState()

    const back = () => {
        navigate(historyPath)
    }

    useEffect(() => {
        setHistoryPath(currentPath)
        setCurrentPath(pathname)
    }, [pathname])

    return { back }
}