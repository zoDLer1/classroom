import css from './css/colormenu.module.css'
import Color from './components/ColorItem'
import Link from 'components/UI/navigation/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function ColorMenu({ condition, current, coords, items, onAplly, onReject, loading, close }) {

    if (condition) {
        return (

            <div style={{ left: coords[0], top: coords[1] }} className={css.block}  onClick={(evt) => evt.stopPropagation()}>
                <div className={css.items}>
                    {!loading
                        ? items.map((item) => <Color onChange={() => item.action(current) } key={item.id} checked={item.id === current.color_info.id} value={`#${item.value}`} />)
                        : <div className={css.icon} >
                            <FontAwesomeIcon icon={faSpinner} spinPulse size='xl' />
                        </div>
                    }
                </div>

                <div className={css.btns}>
                    <Link
                        text='Apply'
                        onClick={
                            (evt) => {
                                evt.preventDefault()
                                onAplly(current)
                                close()
                            }
                        }
                    />
                    <Link
                        text='Close'
                        onClick={
                            (evt) => {
                                evt.preventDefault()
                                onReject(current)
                                close()
                            }
                        }
                    />
                </div>

            </div>

        )
    }

}

export default ColorMenu
