import css from './css/menu.module.css'


export default ({ size=1, condition, current, coords, items }) =>  {
    
    return (
        <>
            {condition &&
                <ul style={{left: coords[0], top: coords[1]}} className={[css.block, css[`size_${size}`]].join(' ')}>
                    {JSON.stringify(coords)}
                    {items.map((item, index) => 
                        <li key={index} 
                            onClick={(evt)=>{
                                item.action(current, coords); 
                                if (item.noneAutoClose)
                                    evt.stopPropagation()
                            }} 
                            className={css.item}
                        >
                            <i className={[item.icon, css.icon].join(' ')} />
                            <p className={css.text}>{item.text}</p>
                        </li>)
                    }
                </ul>
            }
        </>
    )
}
    
    
