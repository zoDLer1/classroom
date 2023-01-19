import { useState } from "react";

export const useList = (data) => {
    const [list, setList] = useState(data)
    
    const set = (id, data) => {
        let newCards = [...list]
        let index = newCards.findIndex(item => item.id == id)
        newCards[index] = data
        setList(newCards)
    }
    const remove = (id) => {
        setList([...list].filter(card => card.id != id))
    }
    return [list, set, remove]
    

    
}