import css from './css/navlink.module.css'
import DefaultLink from 'UI/defaultLink'

export default (props) =>  {
    
    return (
        <DefaultLink {...props} className={`${css.block} ${props.isChoosen ? css.choosen : ''}`} to={props.to}></DefaultLink>
    )
}

