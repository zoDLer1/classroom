import React from 'react'
import MultipleDiagram from 'components/UI/diagrams/multiple-diagram'
import TitleList from '../TitleList'


export default function StatisticQuestion({ correct, name, id }) {

    const data = [
        { color: '#00B94F', percent: correct, title: 'Правильные ответы' },
        { color: '#F83A22', percent: 100 - correct, title: 'Неправильные ответы' },
    ]

    return (
        <div className='my-5'>
            <TitleList hidding title={name} useSwitch initialCondition={false} >
                {[<MultipleDiagram height='250' width='250' data={data} key={id} />]}
            </TitleList>
        </div>
    )
}
