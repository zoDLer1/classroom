import Input from "components/UI/inputs/Input"
import useInput from "hooks/useInput"

function FormInput({ value, validationMethods, ...props }) {
    const { getProps } = useInput({ value, validationMethods })
    
    return (
        <Input {...getProps()} {...props} />
    )
}

export default FormInput