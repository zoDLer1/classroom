import css from './css/messager.module.css'


export default (props) =>  {

    return (
        <a href={props.to}>
            <i className={`${css.icon} ${props.icon}`}></i>
        </a>
    )
}
