import { useOpen } from "./useOpen"
import { useState } from "react"

export const useCurrent = (onAutoClose = () => null) =>{
    const [current, setCurrent] = useState()
    

    const onCurrentAutoClose = () =>{
        setCurrent((current)=> {
            onAutoClose(current)
            return current
        })
    }
    const [openHookStates, openHookFunctions] = useOpen(onCurrentAutoClose)

    return [{...openHookStates, current}, {...openHookFunctions, setCurrent}]
}