import css from './css/card.module.css'
import Event from './event'


export default (props) =>  {

    const setName = (evt) =>{
        props.set(props.data.id, {...props.data, name: evt.target.value})
    }
    
    return (
        <div>
            <div className={css.block}>
                <header style={{backgroundColor: props.data.color}} className={css.header}>
                    
                        {/* {JSON.stringify(props.data.editMode)} */}
                        {props.data.editMode 
                        ? <div className={css.edit_layer}>
                            <div className={css.input}>
                                <input type="text" value={props.data.name} onChange={setName}/>
                            </div>
                            <i onClick={()=> props.disableEditMode(props.data.id, props.data)} className={`${css.apply} fa-solid fa-check`}></i>

                        </div>
                    : <>
                        <h3 className={css.label}>{props.data.name}</h3>
                        <i style={{WebkitTextStroke: `1px ${props.data.color}`}} className={`${css.icon} fa-regular fa-file-lines`}></i>
                    </>}
                    
                    
                </header>
                <div className={css.events}>
                    {props.data.events.map(event => <Event key={event.id} data={event}/>)}
                </div>
                <footer className={css.footer}>
                    <div className={css.action}>
                        <i className='fa-regular fa-file-lines'></i>
                    </div>
                    <div onClick={(evt) => props.menuOpen(evt, props.data)} className={css.action}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </footer>
            </div>
            
        </div>
    )
}
