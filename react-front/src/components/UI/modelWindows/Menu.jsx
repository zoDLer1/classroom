import css from './css/menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ size = 1, condition, current, coords, items }) => {

    return (
        <>
            {condition &&
                <ul style={{ left: coords[0], top: coords[1] }} className={[css.block, css[`size_${size}`]].join(' ')}>
                    {items.map((item, index) =>
                        <li key={index}
                            onClick={(evt) => {
                                item.action(current, coords);
                                if (item.noneAutoClose)
                                    evt.stopPropagation()
                            }}
                            className={css.item}
                        >
                            <FontAwesomeIcon className={css.icon} icon={item.icon} size='lg' />
                            <p className={css.text}>{item.text}</p>
                        </li>)
                    }
                </ul>
            }
        </>
    )
}


