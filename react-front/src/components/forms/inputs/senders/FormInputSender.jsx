import React from 'react'
import { Field } from 'formik'
import { useState } from 'react'
import Input from 'components/UI/inputs/Input'


export function InputSender({ field: { onBlur, onChange, ...field }, form, ...props }) {
    const [isEdited, setEdited] = useState(false)

    const sendForm = () => {
        form.submitForm()
        setEdited(false)
    }


    return (
        <Input
            field={
                {
                    onChange: (event) => {
                        onChange(event)
                        setEdited(true)
                    },
                    onBlur: (event) => {
                        form.handleBlur(event)
                        if (isEdited) sendForm()
                    },
                    ...field
                }
            }
            {...props}
            form={form}
        />
    )
}



export default function FormInputSender({ ...props }) {
    return (
        <Field component={InputSender} {...props} />
    )
}
