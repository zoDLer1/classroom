import css from './select.module.css'
import Input from 'UI/Inputs/Input'
import Option from 'UI/Inputs/Select/Option'
import { useOpen } from 'hooks/useOpen'


function Select({ options, onChange, value, placeholder, icon }) {

    const { condition, close, toggle } = useOpen()


    const select = (option) => {
        close()
        onChange(option)
    }


    return (
        <div className={css.block}>
            <Input onClick={toggle} value={value ? value : ''} placeholder={placeholder} icon={icon} />
            {condition &&
                <div className={css.options}>
                    {options.map(item =>
                        <Option key={item.id} data={item} onSelect={() => select(item)} />
                    )}
                </div>
            }
        </div>
    )
}

export default Select
