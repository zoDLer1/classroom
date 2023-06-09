import css from './menu-item.module.css'
import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


function MenuItem({ icon, fs=24, action, isChecked=false }) {

    const [checked, setChecked] = useState(isChecked) 

    return <FontAwesomeIcon onClick={() => action(setChecked)} icon={icon} className={[css.block, css[`fs${fs}`], css[`isChecked-${checked}`]].join(' ')}></FontAwesomeIcon>
}

export default MenuItem

