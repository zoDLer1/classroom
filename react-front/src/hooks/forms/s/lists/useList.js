import { useState } from "react"

const useList = (initialValue = []) => {
    const [list, setList] = useState(initialValue)

    const setListIndex = (index, value) =>{
        setList((list)=>{
            const newList = [ ...list ]
            newList[index] = value
            return newList
        })
    }

    return [list, setListIndex, setList]
}
export default useList