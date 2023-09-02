import React from 'react'
import { Field } from 'formik'
import { useState } from 'react'
import Select from 'components/UI/inputs/Select'


export function Wrapper({ field, form, ...props }) {


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
        <Field component={Wrapper} {...props} />
    )
}
