import React from 'react'
import { Field } from 'formik'
import { useState } from 'react'
import Input from 'components/UI/inputs/Input'
import { DefaultRenderer } from '../helpers/renderers'
export default function FormInputSender({ name, ...props }) {

    const [isEdited, setEdited] = useState(false)


    return (
        <Field name={name}>
            {({ field: { onBlur, onChange, ...field }, form, ...formProps }) => {
                return <DefaultRenderer
                    component={Input}
                    field={{
                        onChange: (event) => {
                            onChange(event)
                            setEdited(true)
                        },
                        onBlur: (event) => {
                            form.handleBlur(event)
                            if (isEdited) {
                                form.submitForm()
                                setEdited(false)
                            }
                        },
                        ...field
                    }}
                    form={form}
                    {...props}
                    {...formProps}
                />
            }}
        </Field>
    )
}
