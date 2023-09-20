import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'


function Action({ text, icon, styleAction = 'default', disabled = false, onClick, compact = false }) {

    return (
        <div onClick={(evt) => !disabled && onClick(evt)} className={
            cx('group/action cursor-pointer py-1 px-[10px] transition-background_color duration-100 rounded-lg',
                {
                    'text-primary hover:bg-primary-50': styleAction === 'default',
                    'text-rose-600 hover:bg-rose-100': styleAction === 'error'
                }
            )
        }>
            <div className={'text-[15px] flex font-medium items-center gap-2'}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {text && <span className={cx({'hidden group-hover/action:block': compact})}>{text}</span>}
            </div>
        </div>
    )
}
export default Action
