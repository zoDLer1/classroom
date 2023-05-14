import { useState } from "react"


export const useAlert = () => {
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
