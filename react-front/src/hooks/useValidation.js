import { useEffect, useState } from 'react'


function useValidate({ value, validate, rools, setValue, linked }) {
    const [isSelected, setSelected] = useState(false)

    useEffect(() => {
        
        if (isSelected) {
            validate()
            linked()
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [value])
    const onChanged = (value) => {
        setSelected(true)
        const isValid = rools(value)
        if (isValid) {
            setValue(value)
        }
    }
    return { onChanged }
}

export default useValidate