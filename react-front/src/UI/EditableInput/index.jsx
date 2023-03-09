import Input from "UI/Inputs/Input"
import css from './css/editableInput.module.css'

export default ({ isEditable=true, ...props}) =>  {

    return (
        <div className={css.block}>
            {
                isEditable
                ? <Input {...props}/>
                : <h4>{props.value}</h4>
            }
            
            
        </div>
    )
    

    
}
