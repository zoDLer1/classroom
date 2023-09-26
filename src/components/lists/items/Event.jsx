import css from './css/event.module.css'
import Link from 'components/UI/navigation/Link'

export default (props) =>  {
    return (
        <div className={css.block}>
            <div className={css.body}>
                <p className={css.label}>{props.data.name}</p>
                
                    <Link text={props.data.link}/>
                
            </div>
            <p className={css.time}>16:54</p>
        </div>
    )
}
