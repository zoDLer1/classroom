import React from 'react'
import { Field } from 'formik'
import Select from 'components/UI/inputs/Select'


export function SelectSender({ field, form, ...props }) {


    const onSelect = (name, newValue, oldValue) => {
        if (newValue !== oldValue) form.submitForm()
    }

    return (
        <Select
            field={field}
            {...props}
            onSelect={onSelect}
            form={form}
        />
    )
}



export default function FormSelectSender({ ...props }) {
    return (
        <Field component={SelectSender} {...props} />
    )
}
