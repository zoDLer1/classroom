export default (props) =>{
    return (
        <div class="form__input form__containter form__containter--between">
            <div class="form__input-body form__containter">
                {props.icon && (
                    <i className={ "form__input-icon " + props.icon }></i>
                )}
                <input name={props.name} placeholder={props.placeholder} type='text'/>
            </div>
        </div>
    )
}