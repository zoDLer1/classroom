import { useState } from "react"
import { useCurrent } from "./useCurrent"

export function useMenuControl(onAutoClose=()=> null) {
    const [currentState, currentFunctions] = useCurrent(onAutoClose)
    const [items, setItems] = useState([]) 
    const [coords, set] = useState([0, 0])
    const setCoords = (x, y) => set([x,y])
 
    return [{...currentState, items, coords}, {...currentFunctions, setCoords, setItems}]
}

