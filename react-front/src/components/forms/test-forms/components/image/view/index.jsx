import css from '../css/image.module.css'

export default ({data, onClose, ...props}) =>  {

    return (
        <div className={css.block}>
            <img src={data.url} {...props} className={css.photo}   />
        </div>
        
    )
}
