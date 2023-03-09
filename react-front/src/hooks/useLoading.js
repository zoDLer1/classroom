import { useEffect, useState } from "react";

export function useLoading(func = async ()=>null, defaultLoad=false) {
    const [isLoading, setLoading] = useState(defaultLoad)

    const startLoading = () => setLoading(true)

    const stopLoading = () => setLoading(false)
    useEffect(()=>{
        const fetchLoading = async () =>{
            startLoading()
            await func()
            stopLoading()
       }
       fetchLoading()
    }, [])

    return { isLoading, startLoading, stopLoading }

}


