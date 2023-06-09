import React from 'react'
import css from './css/switcher.module.css'
import { useEffect } from 'react';
import FormLoader from '../formLoader';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function SectionsSwither({ isLoading, sections}) {
    const navigate = useNavigate()
    const { hash } = useLocation()


    const setSelected = (index) => {
        // set(index)
    }
    const ButtonController = (evt) => {
        if (!isNaN(evt.key)) {
            const number = Number(evt.key)
            if (number && number <= sections.length) {
                setSelected(number - 1)
            }
        }
    }
    useEffect(()=>{
        if (sections.length) {
            if(!sections.find(item => item.hash === hash)){
                navigate(sections[0].hash)
            }
        }
    }, [hash])


    useEffect(() => {
        if (sections.length) {
            if (!hash) {
                navigate(sections[0].hash)
            }
        }
    }, [sections])

    return (

        <div className={css.block} onKeyDown={ButtonController} tabIndex={0}>
            <FormLoader condition={isLoading}>
                <div className={css.body}>
                    {sections.map((item, index) =>
                        <div onClick={() => navigate(sections[index]?.hash)} key={`switcher-${index}`} className={[css.item, css[`selected--${sections[index]?.hash === hash}`]].join(' ')}>{item.text}</div>
                    )}
                </div>
                <div className={css.section}>
                    {sections.find(item => item.hash === hash)?.elem}
                </div>
            </FormLoader>
        </div>

    )
}

export default SectionsSwither
