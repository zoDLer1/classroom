import { useEffect } from "react";
import useRequest from "./useRequest";


export const useInitialRequest = (payload, ...args) => {
    const [request, isLoading] = useRequest(...args, true)
    useEffect(() => {
        request(payload)
    }, [])
    return [isLoading]
}
