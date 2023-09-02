import TextArea from "components/UI/inputs/TextArea"
import { Field, FastField } from "formik"

export default function FormTextArea({ name, ...props }) {
    return (
        <Field component={TextArea} name={name} {...props}/>
    )
}

export const FormFastTextArea = ({ name, ...props }) => {
    return (
        <FastField component={TextArea} name={name} {...props}/>
    )
}