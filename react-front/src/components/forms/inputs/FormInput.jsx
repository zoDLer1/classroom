import Input from "components/UI/inputs/Input"
import { Field, FastField } from "formik"
import { shouldUpdateFastField } from "./helpers/functions"
import { DefaultRenderer, NestedRenderer } from "./helpers/renderers"


export default function FormInput({ name, ...props }) {
    return (
        <Field name={name}>
            {(formProps) => <DefaultRenderer component={Input} {...formProps} {...props} />}
        </Field>
    )
}

export const FormFastInput = ({ name, ...props }) => {
    return (
        <FastField name={name} shouldUpdate={shouldUpdateFastField} {...props}>
            {(formProps) => <DefaultRenderer component={Input} {...formProps} {...props} />}
        </FastField>
    )
}

export const FormNestedFastInput = ({ name, ...props }) => {
    return (
        <FastField name={name} shouldUpdate={shouldUpdateFastField} {...props}>
            {(formProps) => <NestedRenderer component={Input} {...formProps} {...props}/>}
        </FastField> 
    )
}
