import CheckBox from "components/UI/inputs/CheckBox"
import { Field, FastField } from "formik"
import { shouldUpdateFastFieldDisabled } from "./helpers/functions"
import { DefaultRenderer } from "./helpers/renderers"

export default function FormCheckBox({ name, ...props }) {
    return <Field  name={name} {...props}>
        {(formProps) => <DefaultRenderer component={CheckBox} {...props} {...formProps}/>}
    </Field> 
}

export const FormFastCheckBox = ({ name, ...props }) => {
    return <FastField shouldUpdate={shouldUpdateFastFieldDisabled} component={CheckBox} name={name} {...props} />
}