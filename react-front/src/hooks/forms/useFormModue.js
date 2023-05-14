import { useEffect } from "react";
import useFormValidation from "./useFormValidation";


function useFormModule(InputsData, { error, value, validationMethods }) {


    const { setInputValue, changeError, getModule, getInput, ...validation } = useFormValidation(InputsData)
    const { setError, setValue } = validationMethods




    const getModuleInput = (inputName) => {
        const inputData = getInput(inputName)
        return {
            ...inputData,
            error: error[inputName] || '',
            value: value[inputName] || '',

        }
    }

    const getSubModule = (inputName) => {
        return {
            errors: error[inputName] || [],
            values: value[inputName] || [],
            validationMethods: {
                setErrors: (error) => changeError(inputName, error),
                setValues: (value) => setInputValue(inputName, value),
            }
        }
    }


    useEffect(() => {
        setValue(validation.getValues())
    }, [validation.inputs])

    useEffect(() => {
        setError(validation.errors)
    }, [validation.errors])

    return { error, getInput: getModuleInput, getModule: getSubModule, setInputValue, ...validation }
}
export default useFormModule