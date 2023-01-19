import css from "./css/input.module.css";
import Warning from "UI/Warning";

export default ({ads, validation, warning, icon, onClick, ...props}) =>{
    let errors = []
    if (validation){
        for(let item of validation){
            if (!item){
                errors.push(item)
            }
        }
    }
    
    



    return (
        
    
        <div onClick={onClick ? onClick: null} className={[css.block, warning ? css.warning: ''].join(' ')}>
            
            <div className={css.body}>
                {icon && (
                    <i className={`${css.icon} ${icon}`}></i>
                )}
                <input {...props} />
            </div>
            <div className={css.ads}>
                {/* {errors ? <Warning text={warning}/> :''} */}
                {ads && ads}
                
            </div>
            
        </div>
    )
}