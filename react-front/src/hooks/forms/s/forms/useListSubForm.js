import { useEffect } from "react";
import useList from "../lists/useList";

const useListSubForm = ({ index, methods, value, error, isParentUpdated }, count = 1, name = 'q') => {


    const [values, setValue, setValues] = useList(!value.length ? Array(count).fill({}) : value)

    const [errors, setError, setErrors] = useList(Array(count).fill({}))

    const [validators, setValidator] = useList(Array(count).fill({}))

    const [updateList, setUpdate, setUpdateList] = useList(Array(count).fill(isParentUpdated ?? true))


    // useEffect(()=>{
    //     console.log(name, updateList, isParentUpdated)
    // }, [updateList])

    useEffect(() => {
        console.log(name, values)
        methods.setValue(values)
    }, [values])

    useEffect(() => {
        methods.setError(errors)
    }, [errors])

    useEffect(() => {
        methods.setValidator(runValidation)
    }, [validators])

    const addItem = (index) => {
        setValues((values) => [
            ...values.slice(0, index),
            {},
            ...values.slice(index)
        ]
        )
        setErrors((errors) => [
            ...errors.slice(0, index),
            {},
            ...errors.slice(index)
        ]
        )
        setUpdateList((updates) => [
            ...updates,
            false
        ])

        setUpdate(index, true)
    }

    const runValidation = (values) => {
        let has_error = false
        for (const [index, value] of values.entries()) {
            const result = validators[index](value)
            if (!result) {
                has_error = true
            }
        }
        return !has_error
    }

    const getItem = (index) => {
        return {
            index,
            isUpdated: updateList[index],
            value: value[index],
            error: error.text[index] || {},
            methods: {
                setUpdate: (value = false) => setUpdate(index, value),
                setValue: (value) => setValue(index, value),
                setError: (value) => setError(index, value),
                setValidator: (validator) => setValidator(index, validator)
            }
        }
    }

    return { value, updateList, getItem, addItem }
}
export default useListSubForm