import Input from 'UI/Input'

export default (props) =>  {
    return (
        <Input value={props.value} onChange={(evt) => props.set(evt.target.value)} name={`question_${props.numb}_answer`} placeholder="Text answer" icon='fa-solid fa-pen'/>
    )
}
