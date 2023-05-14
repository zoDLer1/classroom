import css from './css/select.module.css'
import Input from './Input'
import Option from './Option'
import { useOpen } from 'hooks/useOpen'
import { useState } from 'react'
import { useEffect } from 'react'
import useRequest from 'hooks/useRequest'


function Select({ value, options, onChange, ...props }) {
    const { asyncLoadOptions } = options
    const [{ condition }, { close, toggle }] = useOpen()
    const [selfOptions, setSelfOptions] = useState(options?.selectOptions || [])
    const [loadData, isLoad] = useRequest(asyncLoadOptions,
        {
            200: (response) => setSelfOptions(response.data)
        }
    )


    useEffect(()=>{
        if (asyncLoadOptions){
            loadData()
        }
    }, [])

    const select = (option) => {
        close()
        onChange(option)
    }

    return (
        <div className={css.block}>
            <Input onClick={toggle} value={selfOptions.find(option=> option.id === value)?.name || ''} {...props} readOnly />
            {condition &&
                <div className={css.options}>
                    {selfOptions.map(item =>
                        <Option key={item.id} data={item} onSelect={() => select(item)} />
                    )}
                </div>
            }
        </div>
    )
}

export default Select
