import Input  from 'UI/Input'
import IconCheckbox from 'UI/IconCheckbox'
import { useState } from 'react'

export default (props) =>  {

    const [type, setType] = useState('password')

    const toggleType = () => {
        setType(type === 'password' ? 'text': 'password')
    }


    return (
        <Input name={props.name} type={type} placeholder={props.placeholder} icon={props.icon} ads={[<IconCheckbox name={props.name} icon='fa-regular fa-eye-slash' func={toggleType} />] } />
    )
}

