import css from "./css/input.module.css";


export default ({ads, icon, onClick, ...props}) =>{
    return (
        <div onClick={onClick ? onClick: null} className={css.block}>
      
            <div class={css.body}>
                {icon && (
                    <i className={`${css.icon} ${icon}`}></i>
                )}
                <input {...props} />
            </div>
            {ads && ads}
        </div>
    )
}