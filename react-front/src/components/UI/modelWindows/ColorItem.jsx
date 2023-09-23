import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const ColorItem = ({value, ...props}) =>  {
    const id = useId()
    return (
        <div>
            <input data-color={value} className='peer' id={id} name="color-radio" {...props} type='radio' hidden />
            <label style={{backgroundColor: value}} className='peer-checked:[&>*]:block flex items-center justify-center w-7 h-7 cursor-pointer' htmlFor={id}>
                <FontAwesomeIcon icon={faCheck} className='text-xl text-white hidden' />
            </label> 
        </div>
    )
}
export default ColorItem