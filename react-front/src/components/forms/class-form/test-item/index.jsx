import css from './css/test-item.module.css'
import { Link } from 'react-router-dom'

export default (props) =>  {
    return (
        <Link to={'/tests/' + props.data.id}>
            <div className={css.block}>
                <i className={`${css.icon} fa-regular fa-file-lines`}></i>  {/* ??? style={{color: props.data.color}} */}
                <div className={css.footer}>
                    <p className={css.name}>{props.data.name}</p>
                    <i className={`${css.menu} fa-solid fa-ellipsis-vertical`}></i>
                </div>
            </div>
        </Link>       
    )
}
