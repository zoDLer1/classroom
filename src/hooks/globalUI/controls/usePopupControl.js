import { useState } from "react"
import { useCurrent } from "../useCurrent"

export function usePopupControl() {

    const [currentHookStates, openHookFunctions] = useCurrent()
    const [content, setContent] = useState(<></>)
    
    return [{...currentHookStates, content}, {...openHookFunctions, setContent}]

}


