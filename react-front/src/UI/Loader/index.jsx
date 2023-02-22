import css from './css/loader.module.css'


export default () =>  {
    return (
        <div className={css.block}>
            <i className={`${css.icon} fa-solid fa-spinner`}></i>
        </div>
    )
}
