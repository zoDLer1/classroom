import css from "./css/input.module.css";


export default ({ads, icon, ...props}) =>{
    return (
        <div className={css.block}>
      
            <div class={css.body}>
                {icon && (
                    <i className={[css.icon, icon].join(' ')}></i>
                )}
                <input {...props} />
            </div>
            {ads && ads}
        </div>
    )
}