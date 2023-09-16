import { useState } from 'react'
import css from './css/sidebar-menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import itemCss from './css/menu-item.module.css'

function SidebarMenu({ items, className, id }) {
    return (
        <div className={[css.menu, className].join(' ')}>
            <div className={css.body}>
                {items.map((item, index) => <MenuItem key={`menu-${id}-${index}`} {...item} />)}
            </div>
        </div>
    )
}

function MenuItem({ icon, fs = 24, action, isChecked = false }) {

    const [checked, setChecked] = useState(isChecked)

    return <FontAwesomeIcon onClick={() => action(setChecked)} icon={icon} className={[itemCss.block, itemCss[`fs${fs}`], itemCss[`isChecked-${checked}`]].join(' ')}></FontAwesomeIcon>
}


export default SidebarMenu
