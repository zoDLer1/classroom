import TextArea from "components/UI/inputs/TextArea"
import { Field, FastField } from "formik"
import { shouldUpdateFastField } from "./helpers/functions"


export default function FormTextArea({ name, ...props }) {
    return (
        <Field component={TextArea} name={name} {...props}/>
    )
}

export const FormFastTextArea = ({ name, ...props }) => {
    return (
        <FastField shouldUpdate={shouldUpdateFastField} component={TextArea} name={name} {...props}/>
    )
}