import css from '../form-header.module.css'

export default (props) =>  {
    return (
        <div className={[css.block, css.view].join(' ')}>
            <h2 className={css.label}>{props.name}</h2>
            <p className={css.description}>{props.description}</p>
            
        </div>
    )
}
