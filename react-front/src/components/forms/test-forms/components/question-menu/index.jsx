import React from 'react'
import css from './question-menu.module.css'
import MenuItem from './menu-item'

function QuestionMenu({ items, className, id }) {
    return (
        <div className={[css.menu, className].join(' ')}>
            <div className={css.body}>
                {items.map((item, index) => <MenuItem key={`menu-${id}-${index}`} {...item}/>)}
            </div>
        </div>
    )
}

export default QuestionMenu
