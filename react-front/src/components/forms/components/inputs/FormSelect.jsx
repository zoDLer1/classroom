import Select from "components/UI/inputs/Select"
import useInput from "hooks/useInput"
import { useEffect } from "react"


function FormSelect({ value, validationMethods, ...props }) {
    
    
    const { getProps } = useInput({ value, validationMethods, getValue: (option) => option.id })

    return (
        <Select {...getProps()} {...props} />
    )
    
}

export default FormSelect