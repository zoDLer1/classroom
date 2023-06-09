import css from './css/card.module.css'
import DefaultLink from 'components/UI/navigation/DefaultLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Card({ menuOpen, update, value, state, nameEdit }) {



    const setName = (name) => {
        update(value.id, { ...value, name: name })
    }
    const OnEnter = (evt) => {
        if (evt.keyCode === 13){
            nameEdit(value)
        }
    }



    return (

        <div className={css.block}>
            <DefaultLink disabled={state.editMode} to={`/classes/${value.id}`} onClick={(evt) => evt.stopPropagation()}  style={{ backgroundColor: `#${value.color_info.value}` }} className={css.header}>
                {state.editMode
                    ? <div className={css.edit_layer} >
                        <div className={css.input}>
                            <input onKeyUp={OnEnter} type="text" value={value.name} onChange={(evt) => setName(evt.target.value)} />
                        </div>
                        <FontAwesomeIcon icon={faCheck} onClick={() => nameEdit(value)} className={css.apply} size='lg' />
                    </div>
                    : <>
                        <h3 className={css.label}>{value.name}</h3>
                        <i style={{ WebkitTextStroke: `1px #${value.color_info.value}` }} className={`${css.icon} fa-solid fa-users`}></i>

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

    )
}
export default Card
