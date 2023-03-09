import Input  from 'UI/Inputs/Input'
import IconCheckbox from 'UI/IconCheckbox'
import { useState } from 'react'

export default ({icon, ...props}) =>  {

    const [type, setType] = useState('password')

    const toggleType = () => {
        setType(type === 'password' ? 'text': 'password')
    }


    return (
        <Input type={type} {...props} icon={icon} ads={<IconCheckbox name={props.name} icon='fa-regular fa-eye-slash' func={toggleType} />} />
    )
}

