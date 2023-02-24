import css from './css/submit.module.css'


function Submit ({text, loading=false, ...props}) {
    return (
        <div className={css.block}>
            <input  id="submit" hidden type="submit"/>
            <label {...props} htmlFor="submit">
             
                {!loading
                ? text
                : <i className={`${css.loader} fa-solid fa-spinner`}></i>
                }

                
            </label>
            
        </div>
    )
}
export default Submit