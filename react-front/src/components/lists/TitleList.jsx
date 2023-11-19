import useConditionSwitch from 'hooks/useConditionSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'


const TitleList = ({ children, title, empty = null, hidding = false, useSwitch = false, initialCondition = true }) => {

    const { condition, toggle } = useConditionSwitch(initialCondition)

    if (children.length || empty) {
        return (
            <div onClick={() => { if (hidding) toggle() }}>
                <div className='group border-b border-primary flex-ic-jb px-5 pb-2.5 border-solid select-none cursor-pointer'>
                    <p className='text-primary text-2xl'>{title}</p>
                    {useSwitch && hidding
                        ? <FontAwesomeIcon className={'text-primary'} icon={condition ? faAngleUp : faAngleDown} />
                        : <p className='text-primary'>{children?.length}</p>
                    }
                </div>
                <div onClick={(evt => evt.stopPropagation())}>
                    {children.length
                        ? (condition) && <div className='pt-2.5 px-4'>
                            {children}
                        </div>
                        : <div className='flex-vertical-ic-jc gap-2 mt-5 mb-4'>
                            {empty}
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default TitleList