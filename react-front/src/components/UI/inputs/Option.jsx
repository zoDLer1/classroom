import css from './css/option.module.css'

const Option = ({ data, onSelect, }) => {
    return (
        <div onClick={() => onSelect(data)} className={css.block}>
            <div className={css.body}>{data.name}</div>
        </div>
    )
}
export default Option