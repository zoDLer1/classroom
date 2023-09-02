import { useState } from 'react'
import { useInitialRequest } from './useInitialRequest'


export default function useGlobalData(initialValue, request) {
    const [data, setData] = useState(initialValue)
    

    useInitialRequest({}, request, {
        200: (resp) => {
            setData(resp.data) 
        }
    })


    return data

}
