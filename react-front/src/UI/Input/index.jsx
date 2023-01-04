import css from "./css/style.module.css";


export default (props) =>{
    return (
        <div className={css.block}>
      
            <div class={css.body}>
                {props.icon && (
                    <i className={[css.icon, props.icon].join(' ')}></i>
                )}
                <input name={props.name} placeholder={props.placeholder} type='text'/>
            </div>
        </div>
    )
}