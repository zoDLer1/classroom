import { useState } from "react"



function useConditionSwitch(initialValue = false) {

    const [isOpen, setOpen] = useState(initialValue)

    const open = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }
    const toggle = () => {
        isOpen ? close() : open()
    }
    return { condition: isOpen, open, close, toggle }
}

export default useConditionSwitch
