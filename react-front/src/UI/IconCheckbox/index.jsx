import css from "./iconCheckbox.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _uniqueId from 'lodash/uniqueId';


const IconCheckbox = ({icon, func}) => {
    const id = _uniqueId('icon-')
    return (
        <div className={css.block}>
            <input id={id} type="checkbox" hidden/>
            <label htmlFor={id} onClick={(evt) => func(evt)}>
                <FontAwesomeIcon icon={icon} />
            </label>
        </div>
    );
}

export default IconCheckbox