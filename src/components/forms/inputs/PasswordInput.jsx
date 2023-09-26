import FormInput from "./FormInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"
import useConditionSwitch from "hooks/useConditionSwitch"


function PasswordInput({ ...props }) {

    const { condition, toggle } = useConditionSwitch()
    
    const conditionStyles = {
        true: {
            icon: faEye,
            color: 'var(--primary-color)',
        },
        false: {
            icon: faEyeSlash,
            color: 'var(--gray-color)'
        }
    }

    return (
        <FormInput type={condition ? 'text' : 'password'} {...props}>
            <FontAwesomeIcon onClick={toggle} cursor='pointer' {...conditionStyles[condition]} />
        </FormInput>
    )
}

export default PasswordInput