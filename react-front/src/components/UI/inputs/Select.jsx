import css from './css/select.module.css'
import Input from './Input'
import Option from './Option'
import { useOpen } from 'hooks/globalUIContent/useOpen'



function Select({ field: { value, onChange, ...fieldOptions }, onSelect = () => null, form, options, ...props }) {

    const [{ condition }, { close, toggle }] = useOpen()
    const select = (id) => {
        close()
        form.setFieldValue(fieldOptions.name, id)
        onSelect(fieldOptions.name, id, value)
    }

    return (
        <div className={css.block}>
            <Input form={form} field={{ value: options.find(option => option.id === value)?.name || '', ...fieldOptions, onChange: () => null }} onClick={toggle} {...props} />
            {condition &&
                <div className={css.options}>
                    {options.map(item =>
                        <Option key={item.id} data={item} onSelect={() => select(item.id)} />
                    )}
                </div>
            }
        </div>
    )
}

export default Select
