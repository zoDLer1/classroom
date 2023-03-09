import css from './css/card.module.css'
import DefaultLink from 'UI/defaultLink'


function Card ({ menuOpen, update, value, state, nameEdit }) {

    
    
    const setName = (name) =>{
        update(value.id, {...value, name: name})
    }
    const apllyNameEdit = () =>{
        nameEdit(value)
    }
    
    
    return (
        <>
            <div className={css.block}>
                <DefaultLink to={`/classes/${value.id}`} style={{backgroundColor: `#${value.color}`}} className={css.header}>
                    {state.editMode 
                        ? <div className={css.edit_layer} onClick={(evt)=>evt.stopPropagation()}>
                            <div className={css.input}>
                                <input type="text" value={value.name} onChange={(evt) => setName(evt.target.value)}/>
                            </div>
                            <i onClick={() => apllyNameEdit()} className={`${css.apply} fa-solid fa-check`}></i>
                        </div>
                        :<>
                            <h3 className={css.label}>{value.name}</h3>
                            <i style={{WebkitTextStroke: `1px #${value.color}`}} className={`${css.icon} fa-solid fa-users`}></i>
                            
                        </>}
                </DefaultLink>
                <div className={css.events}>
                    {/* {value.events.map(event => <Event key={event.id} data={event}/>)} */}
                </div>
                <footer className={css.footer}>
                    <div className={css.action}>
                        <DefaultLink to={`/tests/${value.id}`}>
                            <i className='fa-regular fa-file-lines'></i>
                        </DefaultLink>
                    </div>
                    <div onClick={(evt) => menuOpen(evt)} className={css.action}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    {state.loading && <i className={`${css.loader} fa-solid fa-spinner`}></i>}
                </footer>
            </div>
        </>
    )
}
export default Card
