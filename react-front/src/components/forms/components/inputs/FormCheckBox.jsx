import useCheckBox from "hooks/useCheckBox";
import CheckBox from "components/UI/inputs/CheckBox";


const FormCheckBox = ({value, validationMethods, ...props}) => {
    
    const { getProps } = useCheckBox({ value, validationMethods })
    return <CheckBox {...getProps()} {...props} />
    
}

export default FormCheckBox