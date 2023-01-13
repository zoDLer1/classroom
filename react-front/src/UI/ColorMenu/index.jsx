import css from './css/colormenu.module.css'
import Color from './Color'
import Link from 'UI/Link'

export default (props) =>  {
    
    


    if (props.menu.active){
        return (
            <div style={{top: props.menu.coords.y, left: props.menu.coords.x}} className={css.block}>
                {props.colors.map(item=> <Color onChange={(evt)=> props.setColor(evt.target.dataset.color)} checked={item === props.menu.current.color} color={item} name="color-radio"/>)}
                <div className={css.btns}>
                    <Link text='Apply' onClick={(evt) =>{evt.preventDefault(); props.apply()}} />
                    <Link text='Close' onClick={(evt) =>{evt.preventDefault(); props.close()}} />
                </div>
            </div>
        )
    }
    else{
        return
    }
}
