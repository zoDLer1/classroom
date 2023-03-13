import css from './submit.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Submit ({text, loading=false, ...props}) {
    return (
        <div className={css.block}>
            <input  id="submit" hidden type="submit"/>
            <label {...props} htmlFor="submit">
             
                {!loading
                ? text
                : <FontAwesomeIcon icon={solid('spinner')} spinReverse spinPulse size='lg' />
                }

                
            </label>
            
        </div>
    )
}
export default Submit