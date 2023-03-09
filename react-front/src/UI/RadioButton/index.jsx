import Checkbox from "UI/Inputs/Checkbox"



export default ({children, ...props}) =>  {
    return (
        <Checkbox {...props} type="radio">
            {children}
        </Checkbox>
    )
}
