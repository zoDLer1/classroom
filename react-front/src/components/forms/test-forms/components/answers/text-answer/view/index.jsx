import Input from 'UI/Input'

export default (props) =>  {
    return (
        <Input readOnly defaultValue={props.value} name={`question_${props.numb}_answer`} placeholder="Text answer" icon='fa-solid fa-pen'/>
    )
}
