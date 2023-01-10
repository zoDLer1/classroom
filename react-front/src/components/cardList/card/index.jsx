import css from './css/card.module.css'
import Event from './event'


export default (props) =>  {
    return (
        <div>
            <div className={css.block}>
                <header style={{backgroundColor: '#0388D4'}} className={css.header}>
                    <h3 className={css.label}>{props.data.name}</h3>
                    <div className={css.edit_layer}>
                        <div className="card__input">
                            <div className="card__input-body">
                                <input type="text" />
                            </div>
                            <svg className="card__input-apply" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#fff" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <i className={`${css.icon} fa-regular fa-file-lines`}></i>
                </header>
                <div className={css.events}>
                    {props.data.events.map(event => <Event key={event.id} data={event}/>)}
                </div>
                <footer className={css.footer}>
                    <div className={css.action}>
                        <i className='fa-regular fa-file-lines'></i>
                    </div>
                    <div className={css.action}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </footer>
            </div>
            
        </div>
    )
}
