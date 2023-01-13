import css from './css/popup.module.css'


export default (props) =>  {
    if (props.popup.active){
        return (
            <div className={css.block}>
                {props.children}
            </div>
        )
    }
    else{
        return
    }
    
}
