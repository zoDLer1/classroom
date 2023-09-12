import { useState } from 'react'
import { useAlert } from '../globalUI/useGlobalUI'

const dev_mode = true

const useRequest = (func = async () => null, statuses = {}, waitInitial = false) => {
    const alert = useAlert()
    const [waitingForResponse, setWaiting] = useState(waitInitial)

    const handleResponse = (response, data, statuses) => {
        const func = statuses[response.request.status]
        if (func) func(response, data)
    }

    const handleBadResponse = (response, data, contextStatuses) => {
        const allStatuses = { ...statuses, ...contextStatuses }
        const func = statuses['bad']
        if (dev_mode){
            if (response.request.status === 500){
                document.body.innerHTML = response.response.data 
            }
        }
        if (func) func(response, data)
        handleResponse(response, data, allStatuses)
    }


    const handleCorrectResponse = (response, data, contextStatuses) => {
        const allStatuses = { ...statuses, ...contextStatuses }
        const func = statuses['ok']
        if (func) func(response, data)
        handleResponse(response, data, allStatuses)
    }

    const send = async (data, contextStatuses = {}) => {
        setWaiting(true)
        await func(data, contextStatuses).then(
            (success) => {
                handleCorrectResponse(success, data, contextStatuses)
            },
            (error) => {
                if (error.code === 'ERR_NETWORK') {
                    alert.show('Сервер недоступен')
                }
                else {
                    handleBadResponse(error, data, contextStatuses)
                }
            }
        )
        setWaiting(false)
    }
    return [send, waitingForResponse]
}

export default useRequest