import { useEffect } from 'react'
import Input from 'UI/Inputs/Input'

const CreateTextAnswer = ({value, set, questionIndex}) =>  {

    return (
        <Input value={value[0].value} onChange={(evt) => set([{...value[0], value: evt.target.value}])} name={`question_${questionIndex}_answer`} placeholder="Text answer" icon='fa-solid fa-font'/>
    )
}
export default CreateTextAnswer