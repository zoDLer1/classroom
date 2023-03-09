import css from './css/HiddenList.module.css'
import { useState } from 'react'
import header from 'components/header'



export default ({list=[], label, labelEmptyList='List is empty', Elem, ...props }) =>  {

    const icons = {
        true: 'fa-angle-down',
        false: 'fa-angle-up'
    }

    const [hidden, setHidden] = useState(true)

    const toggle = () =>{
        setHidden(!hidden)
    }



    return (
        
    )
}
