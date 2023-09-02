import { useEffect } from "react";
import useValidation from "./useValidation";
import { Error } from "../lists/useErrors";


const useSubForm = ({ index, isUpdated, value, error, methods }, inputsSettings, customValidation = () => true) => {

    const setError = (key, _error) => {
        const newErrors = { ...error }
        newErrors[key] = new Error(_error)
        methods.setError(newErrors)
    }

    const setValue = (key, _value) => {
        const newValues = { ...value }
        newValues[key] = _value
        methods.setValue(newValues)
    }

    const [validators, { setValidators, setValidator, validateValue, runValidation }] = useValidation([error, setError], customValidation)

    useEffect(() => {
        const initialValidators = {}
        if (Object.keys(validators).length) {
            methods.setValidator(runValidation)
        }
        else {
            for (const [key, value] of Object.entries(inputsSettings)) {
                initialValidators[key] = value?.validators || []
            }
            setValidators(initialValidators)
            
        }

    }, [validators])

    useEffect(() => {
        if (isUpdated) {
            
            const initialValues = {}
            for (const [key, value] of Object.entries(inputsSettings)) {
                initialValues[key] = value?.value ?? ''
            }
            setValidators([])
            console.log(index, initialValues)
            methods.setValue(initialValues)
            methods.setUpdate()
        }
    }, [isUpdated])

    const getInput = (key) => ({
        value: value[key] || '',
        error: error[key] || '',
        methods: {
            setValue: (value) => setValue(key, value),
            validate: (value) => validateValue(key, value)
        }
    })

    const getSubForm = (key) => {
        return {
            index,
            isParentUpdated: isUpdated, 
            value: value[key] || [],
            error: error[key] || [],
            methods: {
                setValue: (value) => setValue(key, value),
                setError: (value) => setError(key, value),
                setValidator: (validator) => setValidator(key, validator)
            }
        }
    }

    return { value, getInput, getSubForm }

}
export default useSubForm

