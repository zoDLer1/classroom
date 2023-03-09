import css from './option.module.css'

const Option = ({data, onSelect, ...props}) =>  {
    return (
        <div {...props} onClick={() => onSelect(data)} className={css.block}>
            <div className={css.body}>{data.name}</div>
        </div>
    )
}
export default Option