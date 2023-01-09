import Checkbox from "UI/Checkbox"



export default ({children, ...props}) =>  {
    return (
        <Checkbox {...props} type="radio">
            {children}
        </Checkbox>
    )
}
