import useCheckBox from "hooks/useCheckBox";
import Switch from "components/UI/inputs/Switch";

const FormSwitch = ({value, validationMethods, ...props}) => {
    
    const { getProps } = useCheckBox({ value, validationMethods })
    return <Switch {...getProps()} {...props} />
    
}

export default FormSwitch