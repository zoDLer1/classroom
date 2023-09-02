import Input from "components/UI/inputs/Input"
import { Field, FastField, getIn } from "formik"


export default function FormInput({ name, ...props }) {
    return (
        <Field name={name}>
            {({ form: { errors, touched }, field }) => <Input error={errors[field.name]} touched={touched[field.name]} field={field} {...props} />}
        </Field>
    )
}

export const FormFastInput = ({ name, ...props }) => {
    return (
        <FastField name={name} {...props}>
            {({ form: { errors, touched }, field }) => <Input error={errors[field.name]} touched={touched[field.name]} field={field} {...props} />}
        </FastField>
    )
}

export const FormNestedFastInput = ({ name, ...props }) => {
    return (
        <FastField name={name} {...props}>
            {({ form: { errors, touched }, field }) => <Input error={getIn(errors, field.name)} touched={getIn(touched, field.name)} field={field} {...props} />}
            
        </FastField>
    )
}
