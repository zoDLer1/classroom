import { useOpen } from "./useOpen"
import { useState } from "react"

export const useCurrent = () =>{
    const [current, setCurrent] = useState()
    
    const [openHookStates, openHookFunctions] = useOpen()

    return [{...openHookStates, current}, {...openHookFunctions, setCurrent}]
}