import React from 'react'
import MultipleDiagram from 'components/UI/diagrams/multiple-diagram'
// import questionCss from './css/question.module.css'
import css from './css/statistic-question.module.css'


export default function StatisticQuestion({ correct, name }) {

    const data = [
        { color: '#00B94F', percent: correct, title: 'Правильные ответы' },
        { color: '#F83A22', percent: 100-correct, title: 'Неправильные ответы' },
    ]

    return (
        <div className={css.block}>
            {/* <h2 className={questionCss.label}>{name}</h2> */}
            <MultipleDiagram height='330' width='330' data={data} />

        </div>
    )
}
