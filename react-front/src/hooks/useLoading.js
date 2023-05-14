import { useEffect, useState } from "react";

export function useLoading(func = async ()=>null, defaultLoad=false, payload) {
    const [isLoading, setLoading] = useState(defaultLoad)

    const startLoading = () => setLoading(true)

    const stopLoading = () => setLoading(false)
    useEffect(()=>{
        const fetchLoading = async () =>{
            startLoading()
            await func(payload)
            stopLoading()
       }
       fetchLoading()
    }, [])

    return { isLoading, startLoading, stopLoading }

}


