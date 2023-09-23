import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

function Button({ text, disabled, loading = false, icon, size = 1, ...props }) {
    return (
        // [css.block, css[`size-${size}`], css[`disabled-${disabled}`]].join(' ')
        <button type='button'
            className={cx(
                'flex uppercase items-center justify-center bg-primary text-white transition-transform duration-200 ease-out w-full gap-2 rounded-full cursor-pointer border-none hover:scale-105 shadow-2xl',
                {
                    'py-4 text-xl tracking-widest': size === 1,
                    'bg-gray-450': disabled,
                    'px-6 py-3 text-base tracking-wider': size === 2
                }
            )}
            {...props}
        >
            {!loading
                ? <>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    {text}
                </>
                : <FontAwesomeIcon icon={faSpinner} spinReverse spinPulse size='lg' />
            }
        </button>
    )
}

export default Button