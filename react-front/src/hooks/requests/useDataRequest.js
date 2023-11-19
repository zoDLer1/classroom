import useRequest from "./useRequest";
import { useState } from "react";

const useDataRequest = (...props) => {
    const [currentData, setSetData] = useState({})
    const [sendData] = useRequest(...props)

    const send = async (data, ...dataProps) => {
        setSetData(data)
        await sendData(data, ...dataProps)
        setSetData({})
        
    }
    return [send, currentData]
}    

export default useDataRequest