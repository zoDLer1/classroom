import useInput from "./useInput"
import { useEffect } from "react"


const useCheckBox = ({ value, methods, ...props }) => {

    const { onTriggerSubmit, ...inputProps } = useInput({ methods, ...props }, (evt) => evt.target.checked)


    useEffect(() => {
        methods.validate(value)
        onTriggerSubmit()
    }, [value])

    return { ...inputProps, value }
}

export default useCheckBox