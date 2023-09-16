import React from 'react'
import FormSelect from '../FormSelect'




export default function FormSelectSender(props) {
   
    const onSelect = (_, newValue, oldValue, form) => {
        if (newValue !== oldValue) form.submitForm()
    }

    return (
        <FormSelect {...props} onSelect={onSelect} />
    )
}
