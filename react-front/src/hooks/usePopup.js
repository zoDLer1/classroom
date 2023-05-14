import { useState } from "react"
import { useCurrent } from "./useCurrent"

export function usePopup(onAutoClose = () => null) {

    const [currentHookStates, openHookFunctions] = useCurrent(onAutoClose)
    const [content, setContent] = useState(<></>)
    
    return [{...currentHookStates, content}, {...openHookFunctions, setContent}]

}


