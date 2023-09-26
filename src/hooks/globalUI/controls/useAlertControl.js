import { useState } from "react"


export const useAlertControl = () => {
    const [isShowing, setShowing] = useState(false)
    const [info, setInfo] = useState()

    const show = (info) => {
        setInfo(info)
        setShowing(true)
    }

    const hide = () => {
        setShowing(false)
    }

    return [{ isShowing, info }, { show, hide }]
}
