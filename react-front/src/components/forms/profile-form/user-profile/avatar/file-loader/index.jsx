import css from './css/file-loader.module.css'


export default () =>  {
    return (
        <div className={css.block}>
            <input id='avatar' type="file" hidden />
            <label htmlFor='avatar' className={css.wrapper}>
                <i className="fa-solid fa-plus"></i>
            </label>
        </div>
    )
}
