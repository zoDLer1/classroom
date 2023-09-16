import React from 'react'
import StatisticQuestion from '../lists/items/StatisticQuestion'
import css from './css/passed-test-statistic.module.css'
import { useOutletContext } from 'react-router-dom'



export default function PassedTestsStatisticForm() {

    const { data } = useOutletContext()

    return (
        <div className={css.block}>
            {data.questions.map(question => <StatisticQuestion key={question.id} {...question} />)}
        </div>
    )
}
