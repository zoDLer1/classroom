import React from 'react'

export default function TemplateViewForm({ ...props }) {
    return (
        <div>{JSON.stringify(props)}</div>
    )
}
