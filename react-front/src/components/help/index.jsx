import { useState } from 'react'
import css from './css/help.module.css'
import React from 'react'


export default (props) =>  {
    const [index, setIndex] = useState(0)

    const children = Array.isArray(props.children) ? props.children : [props.children]
    

    const next = () =>{
        setIndex(index+1)
    }

    const back = () => {
        setIndex(index-1)
    }
    const end = () => {
        props.set(false)
    }

    if (props.active)
        return (
            <div className={css.block}>
                {React.cloneElement(children[index], {current: index+1, total: children.length, next, back, end})}
                {props.children.length}
            </div>
            
        )
}
