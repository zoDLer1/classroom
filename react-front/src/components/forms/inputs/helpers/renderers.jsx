import { getIn } from "formik"

export const DefaultRenderer = ({ form: { errors, touched, ...form }, field, component, ...props }) => component({ error: errors[field.name], touched: touched[field.name], field, form, ...props })

export const NestedRenderer = ({ form: { errors, touched, ...form }, field, component, ...props }) => component({ error: getIn(errors, field.name), touched: getIn(touched, field.name), field, form, ...props })

