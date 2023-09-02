import useInput from "./useInput"
import { useEffect } from "react"


const useSelect = ({ value, methods, ...props }) => {

    const { onTriggerSubmit, ...inputProps } = useInput({ methods, ...props }, (item) => item.id)


    useEffect(() => {
        methods.validate(value)
        onTriggerSubmit()
    }, [value])

    return { ...inputProps, value }
}

export default useSelect