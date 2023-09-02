import useInput from "./useInput"
import { useEffect } from "react"


const useTextInput = ({ value, methods, ...props }) => {

    const { onTriggerSubmit, ...inputProps } = useInput({ methods, ...props }, (evt) => evt.target.value)


    useEffect(() => {
        methods.validate(value)
    }, [value])

    return { ...inputProps, value, onBlur: onTriggerSubmit }
}

export default useTextInput