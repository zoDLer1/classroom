import { useEffect } from "react";
import useRequest from "./useRequest";


export const useInitialRequest = (payload, ...args) => {
    const [request, isLoading] = useRequest(...args)
    useEffect(() => {
        request(payload)
    }, [])
    return [isLoading]
}
