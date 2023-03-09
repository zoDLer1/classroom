import Input from 'UI/Inputs/Input'

export default (props) =>  {
    return (
        <Input value={props.value} onChange={(evt) => props.set(evt.target.value)} name={`question_${props.questionId}_answer`} placeholder="Text answer" icon='fa-solid fa-pen'/>
    )
}
