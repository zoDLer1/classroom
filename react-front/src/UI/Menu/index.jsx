import css from './css/menu.module.css'


export default (props) =>  {
    if (props.menu.active){
        return (
            <ul style={{top: props.menu.coords.y, left: props.menu.coords.x}} className={css.block}>
                {props.items.map(item=> <li onClick={item.action} className={css.item}>
                    <i className={[item.icon, css.icon].join(' ')} />
                    <p className={css.text}>{item.text}</p>
                </li>)}
            </ul>
        )
    }
    else{
        return
    }
    
}
