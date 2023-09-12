import React from 'react'
import { Field } from 'formik'
import CheckBox from 'components/UI/inputs/CheckBox'


export function CheckBoxSender({ field: { onChange, ...field }, form, ...props }) {


    return (
        <CheckBox
            field={
                {
                    onChange: (event) => {
                        onChange(event)
                        form.submitForm()
                    },

                    ...field
                }
            }
            {...props}
            form={form}
        />
    )
}



export default function FormCheckBoxSender({ ...props }) {
    return (
        <Field component={CheckBoxSender} {...props} />
    )
}
