import css from './css/statistics.module.css'
import Metric from './metric'
import CircleDiagram from './circle-diagram'
import MultipleDiagram from 'components/UI/diagrams/multiple-diagram'
import { useState } from 'react'
import Action from 'components/UI/inputs/Action'




export default () =>  {


    const [statistics, setStatistics] = useState({
        metrics: [
            {text: 'Ср. время прохождения', mark: 'good', value: '60', measurements: 's'},
            {text: 'Ср. вреasdasdа', value: '30', mark: 'normal',  measurements: 's'},
            {text: 'Ср. время ответа', value: '30', mark: 'normal',  measurements: 's'},
            {text: 'Общий рейтинг', value: '4453', mark: 'good'}
        ],
        diagram: [
            {color: '#AC725E', percent: 10, title: 'Математические'},
            {color: '#0388D4', percent: 40, title: 'Естественные'},
            {color: '#A47AE2', percent: 10, title: 'Гуманитарные'},
            {color: '#f8faa0', percent: 20, title: 'Филологические'},
            {color: '#00B94F', percent: 5, title: 'Искусство'},
            {color: "#F0A720", percent: 15, title: 'Другое'},
            
        ]
    })


    return (
        <div className={css.block}>
            <h2 className={css.label}>Моя статистика</h2>   
            <div className={css.diagrams}>
                <CircleDiagram value={30} text={'Правильность ответов'}/>
                <CircleDiagram value={56} text={'Правильность ответов'}/>
                <CircleDiagram value={53} text={'Правильность ответов'}/>
            </div>
            <MultipleDiagram data={statistics.diagram}/>

            <div className={css.metrics}>
                <div className={css.metrics_list}>
                    { statistics.metrics.splice(0, statistics.metrics.length-1).map((item, index) => <Metric key={index} {...item} />) }
                </div>
                <Metric {...statistics.metrics[statistics.metrics.length-1]} />
            </div>
            <div className={css.actions}>
                <Action text='Настройки статистики' icon={'fa-solid fa-gear'}/>
                <Action text='Рекомендации системы' icon={'fa-solid fa-robot'} />
            </div>
        </div>
        
    )
}
