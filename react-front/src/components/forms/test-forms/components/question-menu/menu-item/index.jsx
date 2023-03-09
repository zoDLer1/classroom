import css from './menu-item.module.css'
import _uniqueId from 'lodash/uniqueId';

function MenuItem({ icon, fs=24, action, useInput, isChecked=false }) {
    const id = _uniqueId('input')
    let item = <i onClick={action} className={[css.block, css[`fs${fs}`], icon, css[`isChecked-${isChecked}`]].join(' ')}></i>
    if (useInput){
        item = <div>
            <input id={id} {...useInput} hidden/> 
            <label htmlFor={id}>
                {item}
            </label>
        </div>
    }
    return (
        item
    )
}

export default MenuItem

