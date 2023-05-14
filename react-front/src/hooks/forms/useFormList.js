import { useState, useEffect } from "react"



const useFormList = (listLength, { errors, values, validationMethods }) => {
    const { setValues, setErrors } = validationMethods
    const [list, setList] = useState(Array(listLength).fill({}))
    const [errorsList, setErrorsList] = useState(Array(listLength).fill({}))


    useEffect(() => {
        setValues(list)
    }, [list])

    useEffect(() => {
        setErrors(errorsList)
    }, [errorsList])


    const setListValue = (index, value) => {
        setList((list) => {
            const newValues = [...list]
            newValues[index] = value
            return newValues
        })
    }
    const setListError = (index, errorMessage) => {
        setErrorsList((errorsList) => {
            let newErorrs = [...errorsList]
            if (!newErorrs.length) {
                newErorrs = Array(listLength).fill({})
            }
            newErorrs[index] = errorMessage
            return newErorrs
        })
    }
    const getListItem = (index) => {
        return ({
            options: {
                error: errors[index] || {},
                value: values[index] || {},
                validationMethods: {
                    setValue: (value) => setListValue(index, value),
                    setError: (errorMessage) => setListError(index, errorMessage)
                }
            }
        })
    }

    const removeItem = (index) => {
        if (list.length > 2) {
            const newList = [...list]
            newList.splice(index, 1)
            setList(newList)
            const newErorrs = [...errors]
            newErorrs.splice(index, 1)
            setErrorsList(newErorrs)
        }

    }

    const addItem = () => {
        setList([...list, {}])
    }


    return { values: list, getListItem, addItem, removeItem }
}

export default useFormList