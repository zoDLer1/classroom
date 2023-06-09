import React from 'react'
import { useInitialRequest } from 'hooks/useInitialRequest'
import TestsServise from 'services/TestsService'
import formCss from './css/form.module.css'
import FormLoader from './formLoader'
import { useState } from 'react'
import StatisticQuestion from './components/tests/components/StatisticQuestion'
import css from './css/passed-test-statistic.module.css'



export default function PassedTestsStatisticForm({ id }) {

    const [data, setData] = useState([])
    const [isLoading] = useInitialRequest(
        id,
        TestsServise.getPassedTestsStatistics,
        {
            200: (req) => setData(req.data)
        }
    )

    return (

        <div className={[formCss.body].join(' ')}>
            <FormLoader condition={isLoading}>
                <div className={css.block}>
                    {(data?.template?.questions || []).map(item => <StatisticQuestion {...item} />)}
                </div>

            </FormLoader>
        </div>

    )
}
