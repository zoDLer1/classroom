import css from './css/audio.module.css'



export default () =>  {
    return (
        <div className={css.block}>
            {/* <i class="fa-solid fa-volume"></i> */}
            <div className={css.player}>
                <div className="point"></div>
            </div>
        </div>
    )
}
