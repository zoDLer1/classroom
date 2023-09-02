import { useState } from "react"

const useDict = (initialValue = {}) => {
    const [dict, setDict] = useState(initialValue)

    const setDictKey = (key, value) =>{
        setDict((dict)=>{
            const newDict = { ...dict }
            newDict[key] = value
            return newDict
        })
    }

    return [dict, setDictKey, setDict]
}
export default useDict