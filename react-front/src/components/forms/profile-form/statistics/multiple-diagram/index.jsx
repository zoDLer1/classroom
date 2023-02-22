import css from './css/multiple-diagram.module.css'
import { useState } from 'react'



export default ({data, fillIn=true}) =>  {

    let totalOffset = 0

    const [sections, setSections] = useState(data)


    const onFillIn = () => {
        console.warn(`multipleDiagram.autoFill: ${100+totalOffset} per cent of the diagram is incomplete`)
        setSections([...sections, {color: 'gray', percent: 100+totalOffset}])

    }

    return (
        <div className={css.block}>
            <svg className={css.chart} width="450" height="450" viewBox="0 0 50 50">
                {sections.map((item, index) => {
            
                    let result = (<circle key={index} style={{stroke: item.color , strokeDasharray: `${item.percent} 100`, strokeDashoffset: totalOffset}} className={css.unit} r="15.9" cx="50%" cy="50%"></circle>)
                    totalOffset -= item.percent
                    if (fillIn && index === sections.length-1 && totalOffset !== -100){
                        onFillIn(result)
                    }
                    return result
                })
                }
                {sections.length ? null : onFillIn()}
            </svg>
            <div className={css.titles_list}>
                {sections.map((item, index) => 
                <div key={index} className={css.title}>
                    <div className={css.color} style={{backgroundColor: item.color}}></div>
                    <h5 className={css.text}>{item.title} - {item.percent}%</h5>
                </div>)}
                
            </div>
            
        </div>
        
    )
}
