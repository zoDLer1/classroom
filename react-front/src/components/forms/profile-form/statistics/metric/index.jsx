import css from './css/metric.module.css'

export default (props) =>  {
    return (
        <div className={[css.block, css[props.mark]].join(' ')}>
            <h5 className={css.label}>{props.text}</h5>
            <h5 className={css.value}>{props.value}{props.measurements}</h5>
        </div>
    )
}
