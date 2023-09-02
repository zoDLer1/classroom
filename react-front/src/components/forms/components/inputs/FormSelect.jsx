import Select from "components/UI/inputs/Select"
import { Field, FastField, getIn } from "formik"


export default function FormSelect({ name, ...props }) {
    return (
        <Field name={name}>
            {({ form: { errors, touched }, field }) => <Select error={errors[field.name]} touched={touched[field.name]} field={field} {...props} />}
        </Field>
    )
}

export const FormFastSelect = ({ name, ...props }) => {
    return (
        <FastField name={name}>
            {({ form: { errors, touched }, field }) => <Select error={errors[field.name]} touched={touched[field.name]} field={field} {...props} />}
        </FastField>
    )
}

export const FormNestedFastSelect = ({ name, ...props }) => {
    return (
        <FastField name={name}>
            {({ form: { errors, touched, ...form }, field }) => <Select error={getIn(errors, field.name)} touched={getIn(touched, field.name)} form={form} field={field} {...props} />}
        </FastField>
    )
}