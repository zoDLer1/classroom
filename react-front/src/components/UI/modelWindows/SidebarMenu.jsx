import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

function SidebarMenu({ items, className, id }) {
    return (
        <div className={['flex justify-center', className].join(' ')}>
            <div className={'flex-vertical-ic py-8 px-5 rounded-2xs gap-4 h-fit box'}>
                {items.map((item, index) => <MenuItem key={`menu-${id}-${index}`} {...item} />)}
            </div>
        </div>
    )
}

function MenuItem({ icon, action, isChecked = false }) {

    const [checked, setChecked] = useState(isChecked)

    return <FontAwesomeIcon onClick={() => action(setChecked)} icon={icon} className={cx('text-gray-450 hover:text-primary text-2xl cursor-pointer', { 'text-primary': checked })}></FontAwesomeIcon>
}


export default SidebarMenu
