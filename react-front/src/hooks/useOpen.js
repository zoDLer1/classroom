import { useState } from "react"
import { CloseContext } from 'contexts/closeContext';
import { useContext } from 'react'
import _uniqueId from 'lodash/uniqueId';





export function useOpen(onAutoClose=()=>null){
    const [isOpen, setOpen] = useState(false)

    const { add, remove } = useContext(CloseContext)
    const [id] = useState(_uniqueId())

    const closing = () =>{
        
        onAutoClose()
        close()
    }
    


    const open = () => {
        console.log('open')
        setOpen(true)
        add({id, close: closing})
        
    }
    const close = () => {
        console.log('close')
        setOpen(false)
        remove(id)
        
    }

    const toggle = () =>{
        isOpen ? close() : open()
    }

    return {condition:isOpen, open, close, toggle} 
}   


