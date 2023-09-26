import { useState } from "react"


const useHeaderControl = () => {
    const [actions, setActions_] = useState([])
    const [backTo, setBackTo] = useState(null)
    let backToLastUrl = null
    let actionsLastUrl = null

    const setActions = (data, path) => {
        actionsLastUrl = path
        setActions_(data)
    }

    const editAction = (index, data) => {
        const action = actions[index]
        if (action) {
            const actionsPart = [...actions]
            actionsPart[index] = { ...action, ...data }
            setActions(actionsPart)
        }
    }

    const setBack = (path, to = -1) => {
        backToLastUrl = path
        setBackTo(to)
    }

    const clearBack = (path) => {
        if (backToLastUrl !== path) {
            setBackTo(null)
        }
    }

    const clearActions = (path) => {
        if (actionsLastUrl !== path) {
            setActions_([])
        }
        
        
    }

    return [{ actions, backTo }, { clearActions, setActions, setBack, editAction, clearBack }]
}




export default useHeaderControl