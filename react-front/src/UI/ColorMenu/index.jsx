import css from './css/colormenu.module.css'
import Color from './Color'
import Link from 'UI/Link'

function ColorMenu ({ condition, current, coords, items, onAplly, onReject }){
    return (
        <>
            
            {condition &&
                <div style={{left: coords[0], top: coords[1]}} className={css.block} onClick={(evt)=> evt.stopPropagation()}>
                    
                    {items.map((item) => <Color onChange={() => item.action(current)} key={item.id} checked={item.value === current.color} value={`#${item.value}`} name="color-radio"/>)}
                    <div className={css.btns}>
                        <Link 
                            text='Apply' 
                            onClick={
                                (evt) =>{
                                    evt.preventDefault()
                                    onAplly(current)
                                }
                            }
                        />
                        <Link 
                            text='Close' 
                            onClick={
                                (evt) => {
                                    evt.preventDefault()
                                    onReject(current)
                                }
                            }
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default ColorMenu
