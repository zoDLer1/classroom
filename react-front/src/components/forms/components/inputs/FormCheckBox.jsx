import CheckBox from "components/UI/inputs/CheckBox"
import { Field, FastField } from "formik"

export default function FormCheckBox({ name, ...props }) {

    return <Field component={CheckBox} name={name} {...props} />
}

export const FormFastCheckBox = ({ name, ...props }) => {
    return <FastField component={CheckBox} name={name} {...props} />
}