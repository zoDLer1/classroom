import React from 'react'
import css from './switcher.module.css'
import _uniqueId from 'lodash/uniqueId';
import { useState } from 'react';

function Swither({ items, selected, onChange }) {
    const [id] = useState(_uniqueId())




    return (
        <div className={css.block}>
            {items.map((item, index) => 
                <div key={`switcher-${index}`} className={css.item}>
                    <input id={`switcher-${id}-${index}`} name={`switcher-${id}`}  checked={index === selected} onChange={() => onChange(index)} type="radio" hidden  />
                    <label htmlFor={`switcher-${id}-${index}`}>{item}</label>
                </div>
            )}
            
        </div>
    )
}

export default Swither
