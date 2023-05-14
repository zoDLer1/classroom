import Settings from './components/sections/Settings'
import Members from './components/sections/Members'
import SectionsSwither from './components/SectionsSwither'
import Tests from './components/sections/Tests'
import { useEffect, useState } from 'react'


const ClassForm = ({ data, isLoading, setClassData }) => {


    const [sections, setSections] = useState([])


    useEffect(() => {
        if (data.id) {
            const { tests, creator, members, waiters, settings, ...props } = data
            const newSections = []
            if (tests) {
                newSections.push({ elem: <Tests tests={tests} setTests={(tests) => setClassData({ ...data, tests })} />, text: 'Задания' })
            }
            if (members) {
                newSections.push({ elem: <Members teacher={creator} setMembers={(members) => setClassData((data) => ({ ...data, members }))} setWaiters={(waiters) => setClassData((data) => ({ ...data, waiters }))} members={members} waiters={waiters} />, text: 'Участники' })
            }
            if (settings) {
                newSections.push({ elem: <Settings setClassData={(data) => setClassData({ ...data, type: 1 })} settings={settings} {...props} />, text: 'Настройки' })
            }
            setSections(newSections)
        }

    }, [data])



    return (
        <SectionsSwither isLoading={isLoading} sections={sections}></SectionsSwither>
    )
}
export default ClassForm