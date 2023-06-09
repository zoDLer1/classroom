import { useEffect, useState } from "react"

const useFormList = ({ values, isSubmited, errors, validationMethods }, count, useInit = false) => {

    const [list, setList] = useState(values.length && !useInit ? values : Array(count).fill({}))
    const [errorsList, setErrorsList] = useState(errors)




    useEffect(() => {
        validationMethods.setValues(list)
    }, [list])


    useEffect(() => {
        validationMethods.setErrors(errorsList)
    }, [errorsList])

    
    const removeItem = (index) => {
        const newValues = [...list]
        delete errorsList[index]
        setList(newValues.filter((v, i) => index !== i))   
    } 

    const addListItem = () => {
        const newValues = [...list]
        validationMethods.setValues([...newValues, {}])

    }
    const getListItem = (index) => {
        return {
            value: values[index],
            error: errors[index] || {},
            isSubmited,
            validationMethods: {
                setValue: (value) => {
                    setList((values) => {
                        const newValues = [...values]
                        newValues[index] = value
                        return newValues
                    })
                },
                setError: (error) => {

                    setErrorsList((errors) => {
                        const newErrors = { ...errors }
                        for (const key in error) {
                            if (!Object.keys(error[key]).length) {
                                delete error[key]
                            }
                        }
                        if (Object.keys(error).length) {
                            newErrors[index] = error
                        }
                        else {
                            delete newErrors[index]
                        }
                        return newErrors
                    })
                }
            }
        }
    }

    return { removeItem, getListItem, addListItem }
}

export default useFormList