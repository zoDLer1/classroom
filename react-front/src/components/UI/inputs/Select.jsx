import css from './css/select.module.css'
import Input from './Input'
import Option from './Option'
import { useOpen } from 'hooks/globalUI/useOpen'



function Select({ field: { value, onChange, ...fieldOptions }, onSelect = () => null, form, options, readOnly, ...props }) {

    const [{ condition }, { close, toggle }] = useOpen()
    const select = (id) => {
        close()
        form.setFieldValue(fieldOptions.name, id)
        onSelect(fieldOptions.name, id, value, form)
    }

    return (
        <div className={css.block}>

            {readOnly ?
                <div className={css.viewMode}>
                    <h5 className={css.view_placeholder}>{props.placeholder}:</h5>
                    <p>{options.find(option => option.id === value)?.name}</p>
                </div>

                :
                <>
                    <Input form={form} field={{ value: options.find(option => option.id === value)?.name || '', ...fieldOptions, onChange: () => null }} onClick={toggle} {...props} />
                    {condition &&
                        <div className={css.options}>
                            {options.map(item =>
                                <Option key={item.id} data={item} onSelect={() => select(item.id)} />
                            )}
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Select
