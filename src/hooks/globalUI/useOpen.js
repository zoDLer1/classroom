import { useState, useId, useRef } from "react"
import { useClose } from "./useClose";




export function useOpen() {
    const [isOpen, setOpen] = useState(false)
    const stopPropRef = useRef()
    const { add, remove } = useClose()
    const id = useId()

    const closing = () => {
        close()
    }

    const open = () => {
        setOpen(true)
        add({ id, close: closing, stopPropRef})
    }
    const close = () => {
        setOpen(false)
        remove(id)
    }

    const toggle = () => {
        isOpen ? close() : open()
    }

    return [{ condition: isOpen, stopPropRef }, { open, close, toggle }]
}


