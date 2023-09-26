import React from 'react'
import { Field } from 'formik'
import CheckBox from 'components/UI/inputs/CheckBox'
import { DefaultRenderer } from '../helpers/renderers'

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



export default function FormCheckBoxSender({ name, ...props }) {
    return (
        <Field name={name} {...props}>
            {({ field: { onChange, ...field }, form, ...formProps }) => <DefaultRenderer component={CheckBox}
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
                {...formProps}
                form={form}
            />
            }
        </Field>
    )
}
