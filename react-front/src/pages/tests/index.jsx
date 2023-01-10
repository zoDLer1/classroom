import css from './css/test.module.css'
import PageSection from 'components/pageSection'
import CardList from 'components/cardList'
import { useState } from 'react'

export default () =>  {

    const [tests, setTests] =  useState([
        {id: 1, name: 'Class 1', color: '#0388D4', editMode: false,  events: [
            {id: 213, name: 'Added new test', link: 'pass now', time: Date.now()}, 
            {id: 231, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, quae! Minima, aliquam praesentium ut ex vel obcaecati modi minus, tempore accusantium in ipsam voluptas asperiores distinctio quo necessitatibus quisquam consectetur!', link: 'view', time: 0},
            {id: 435, name: 'Test checked', link: 'check', time: 0}
            
        ]},
        {id: 2, name: 'Class 2', color: '#F0A720', editMode: false, events: []}
    ])
    


    return (
        <PageSection className={css.section}>
            <CardList set={setTests} cards={tests} />
        </PageSection>
    )
}
