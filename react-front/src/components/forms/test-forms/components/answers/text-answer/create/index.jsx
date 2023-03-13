
import Input from 'UI/Inputs/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'



const CreateTextAnswer = ({value, set, questionIndex}) =>  {

    return (
        <Input value={value[0].value} onChange={(evt) => set([{...value[0], value: evt.target.value}])} name={`question_${questionIndex}_answer`} placeholder="Text answer" icon={<FontAwesomeIcon icon={solid('font')}/>}/>
    )
}
export default CreateTextAnswer