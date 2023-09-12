import Select from "components/UI/inputs/Select"
import { Field, FastField } from "formik"
import { shouldUpdateFastField } from "./helpers/functions"
import { DefaultRenderer, NestedRenderer } from "./helpers/renderers"


export default function FormSelect({ name, ...props }) {
    return (
        <Field name={name}>
            {(formProps) => <DefaultRenderer component={Select} {...formProps} {...props} />}
        </Field>
    )
}

export const FormFastSelect = ({ name, ...props }) => {
    return (
        <FastField shouldUpdate={shouldUpdateFastField} {...props} name={name}>
            {(formProps) => <DefaultRenderer component={Select} {...formProps} {...props} />}
        </FastField>
    )
}

export const FormNestedFastSelect = ({ name, ...props }) => {
    return (
        <FastField shouldUpdate={shouldUpdateFastField} name={name} {...props}>
            {(formProps) => <NestedRenderer component={Select} {...formProps} {...props} />}
        </FastField>
    )
}