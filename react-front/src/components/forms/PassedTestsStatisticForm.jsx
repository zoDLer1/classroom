import React from 'react'
import StatisticQuestion from '../lists/items/StatisticQuestion'
import { useOutletContext } from 'react-router-dom'



export default function PassedTestsStatisticForm() {

    const { data } = useOutletContext()

    return (
        <div className='py-[10px] px-12 flex flex-col'>
            {data.questions.map(question => <StatisticQuestion key={question.id} {...question} />)}
        </div>
    )
}
