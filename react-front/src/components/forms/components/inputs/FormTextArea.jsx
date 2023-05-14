import TextArea from "components/UI/inputs/TextArea"
import useInput from "hooks/useInput"

function FormTextArea({ value, validationMethods, ...props }) {
    const { getProps } = useInput({ value, validationMethods })
    
    return (
        <TextArea {...getProps()} {...props} />
    )
}

export default FormTextArea