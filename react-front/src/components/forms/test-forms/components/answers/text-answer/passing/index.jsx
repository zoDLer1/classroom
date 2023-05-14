import Input from 'UI/Inputs/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


export default (props) =>  {
    return (<>
        {/* {JSON.stringify(props)} */}
        <Input value={props.value} onChange={(evt) => props.set([{...props.value, value: evt.target.value}])} name={`question_${props.questionId}_answer`} placeholder="Text answer" icon={<FontAwesomeIcon icon={solid('pen')} size='sm'/>}/>
        </>
        
    )
}
