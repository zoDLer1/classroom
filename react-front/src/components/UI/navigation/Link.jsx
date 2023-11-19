import { Link as ReactLink } from 'react-router-dom'


const Link = ({to, text, ...props}) => {
    return (
        <ReactLink {...props} className='text-primary border-b border-solid border-gray-450 text-base' to={to}>{text}</ReactLink>
    )
}

export default Link 