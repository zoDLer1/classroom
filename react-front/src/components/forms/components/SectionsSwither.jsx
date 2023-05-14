import React from 'react'
import css from './css/switcher.module.css'
import { useState, useId } from 'react';
import FormLoader from '../formLoader';

function SectionsSwither({ isLoading, sections, initial_selected = 0 }) {
    const [id] = useId()

    const [selected, set] = useState(initial_selected || Number(localStorage.getItem('ClassSectionsSwitherIndex')))

    const setSelected = (index) =>{
        set(index)
        localStorage.setItem('ClassSectionsSwitherIndex', index)
    }
    const ButtonController = (evt) =>{
        if (!isNaN(evt.key)){
            const number = Number(evt.key)
            if (number && number <= sections.length){
                setSelected(number-1)
            }
        }
    }

    return (

        <div className={css.block} onKeyDown={ButtonController} tabIndex={0}>
            <FormLoader condition={isLoading}>
                <div className={css.body}>
                    {sections.map((item, index) =>
                        <div key={`switcher-${index}`} className={css.item}>
                            <input id={`switcher-${id}-${index}`} name={`switcher-${id}`} checked={index === selected} onChange={() => setSelected(index)} type="radio" hidden />
                            <label htmlFor={`switcher-${id}-${index}`}>{item.text}</label>
                        </div>
                    )}
                </div>
                <div className={css.section}>
                    {sections[selected]?.elem}
                </div>
            </FormLoader>
        </div>

    )
}

export default SectionsSwither
