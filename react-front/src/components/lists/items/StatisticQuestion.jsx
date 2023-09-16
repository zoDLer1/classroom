import React from 'react'
import MultipleDiagram from 'components/UI/diagrams/multiple-diagram'
import questionCss from './css/question.module.css'
import css from './css/statistic-question.module.css'
import membersCss from 'pages/css/members.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useConditionSwitch from 'hooks/useConditionSwitch'

export default function StatisticQuestion({ correct, name }) {

    const { condition, toggle } = useConditionSwitch()

    const data = [
        { color: '#00B94F', percent: correct, title: 'Правильные ответы' },
        { color: '#F83A22', percent: 100 - correct, title: 'Неправильные ответы' },
    ]

    return (
        <div onClick={toggle} className={css.block}>
            <div className={[membersCss.heading, css.heading].join(' ')}>
                <span className={[membersCss.text, membersCss.title].join(' ')}>{name}</span>
                <FontAwesomeIcon className={[membersCss.text, membersCss.title].join(' ')} icon={faAngleDown} />
            </div>
            {condition && <MultipleDiagram height='250' width='250' data={data} />}
        </div>
    )
}
