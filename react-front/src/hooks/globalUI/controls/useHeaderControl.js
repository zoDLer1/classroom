import { useState } from "react"
import useList from "../../helpers/useList"


const useHeaderControl = () => {
    const [actions, setAction_, setActions] = useList([[], []])
    let loaded = false

    const setAction = (container, data) => {
        setAction_(container, data)
        loaded = true
    }

    const [isBackButton, setBack] = useState(false)

    const editAction = (container, index, data) => {
        const action = actions[container][index]
        if (action) {
            const actionsPart = [...actions[container]]
            actionsPart[index] = {...action, ...data}
            setAction(container, actionsPart)
        }

    }

    const clearActions = () => {
        if (!loaded) {

            if (actions.length) {
                setActions([[], []])
            }
            setBack(false)
        }
        else {
            loaded = false
        }
    }



    return [{ actions, isBackButton, loaded }, { clearActions, setAction, setBack, editAction }]
}




export default useHeaderControl