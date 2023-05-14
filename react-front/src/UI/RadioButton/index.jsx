import FormCheckBox from "components/forms/components/inputs/FormCheckBox"

export default ({children, ...props}) =>  {
    return (
        <FormCheckBox {...props} type="radio">
            {children}
        </FormCheckBox>
    )
}
