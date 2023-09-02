import css from './css/popup.module.css'
import React from 'react';


const Popup = ({ condition, stopPropRef, content, current, close }) => {
    if (condition) {
        return (
            <div className={css.block}>
                <div ref={stopPropRef}>
                    {React.cloneElement(content, {...content.props, current, close})}
                </div>     
            </div>
        )
    }
}

export default Popup;
