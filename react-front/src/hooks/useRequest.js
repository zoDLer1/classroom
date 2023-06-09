import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalUIContext } from 'contexts/GlobalUIContext'


const useRequest = (func = async () => null, statuses = {}) => {
    const navigate = useNavigate()
    const { alert } = useContext(GlobalUIContext)
    const [waitingForResponse, setWaiting] = useState(false)

    const handleResponse = (response, data) => {
        const func = statuses[response.request.status]
        if (func) func(response, data)
    }

    const send = async (data) => {
        setWaiting(true)
        const response = await func(data).then(
            (success) => {
                console.log(success)
                handleResponse(success, data)
            },
            (error) => {
                if (error.code === 'ERR_NETWORK') {
                    alert.show('Сервер недоступен')
                }
                console.log(error)
                // if (error.code)
                handleResponse(error, data)
            }
        )
        setWaiting(false)
        return response
    }
    return [send, waitingForResponse]
}

export default useRequest