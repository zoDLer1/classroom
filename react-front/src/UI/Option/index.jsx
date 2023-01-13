import css from './css/option.module.css'

export default ({data, onSelect, ...props}) =>  {
    return (
        <div {...props} onClick={() => onSelect(data)} className={css.block}>
            <div className={css.body}>{data.name}</div>
        </div>
    )
}
