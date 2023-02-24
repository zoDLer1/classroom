import css from "./css/input.module.css";


function Input ({ads, validation, warning, icon, onClick, ...props}){

    return (
        
        <div onClick={onClick} className={[css.block, warning ? css.warning: ''].join(' ')}>
            <div className={css.body}>
                {icon && (
                    <i className={`${css.icon} ${icon}`}></i>
                )}
                <input {...props} />
            </div>
            <div className={css.ads}>
                {ads}
            </div>
            
        </div>
    )
}

export default Input