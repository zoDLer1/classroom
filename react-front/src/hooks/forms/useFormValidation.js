import { useState, useMemo } from "react"


const useFormValidation = (InputsData) => {


    const NormalizedData = useMemo(() => {
        const NormalizedData = {}
        for (const key in InputsData) {
            NormalizedData[key] = {
                value: InputsData[key].value !== undefined ? InputsData[key].value : '',
                hidden: InputsData[key].hidden || false,
                options: InputsData[key].options || {},
                validators: InputsData[key].validators || [],
                rools: InputsData[key].rools || [],
                readOnly: InputsData[key].readOnly || false,
                isOptional: InputsData[key].isOptional || false
            }
        }
        return NormalizedData
    }, [InputsData])

    const [inputs, setInputs] = useState(NormalizedData)
    const [errors, setErrors] = useState({})
    const [isEdited, setEdited] = useState(false)
    const [isSubmited, setSubmited] = useState(false)

    const setInput = (inputName, key, value) => {
        setInputs((inputs) => {

            const newInputs = { ...inputs }
            newInputs[inputName][key] = value
            return newInputs
        })
    }


    const setValues = (values) => {
        setInputs((inputs) => {
            const newInputs = { ...inputs }
            for (const key in values) {
                newInputs[key].value = values[key]

            }
            return newInputs
        })
    }

    const InputCondition = (inputName, value) => setInput(inputName, 'hidden', value)

    const setInputValue = (inputName, value) => setInput(inputName, 'value', value)

    const checkRools = (inputName, newValue) => {
        const rools = inputs[inputName].rools

        for (const rool of rools) {
            if (!rool(newValue)) {
                return false
            }
        }
        return true
    }
    const changeError = (inputName, error) => {
        setErrors((errors) => {
            const newErrors = { ...errors }
            if (Object.keys(error).length) {
                newErrors[inputName] = error
            }
            else {
                delete newErrors[inputName]
            }
            return newErrors
        })
    }
    const validateInput = (inputName, context = {}) => {
        const validators = inputs[inputName].validators
        setEdited((InputsData[inputName].value) !== inputs[inputName].value)
        for (const validator of validators) {
            if (!inputs[inputName].hidden) {
                const errorMessage = validator(inputs[inputName].value, errors[inputName], context)
                changeError(inputName, errorMessage)
                if (errorMessage) {
                    return true
                }
            }
        }
        return false
    }
    const validateInputs = (keys) => {
        let error = false
        for (const key of keys) {
            error = validateInput(key)
        }
        return error
    }
    const getInput = (inputName) => {
        const { isOptional, readOnly, ...input } = inputs[inputName]
        return {
            ...input,
            error: errors[inputName] || '',
            validationMethods: {
                rools: (newValue) => checkRools(inputName, newValue),
                validate: () => validateInput(inputName),
                setValue: (value) => setInputValue(inputName, value),
                linked: inputs[inputName].linked ? () => validateInputs(inputs[inputName].linked) : () => void 0
            },
        }
    }
    const getModule = (inputName) => {
        return {
            values: inputs[inputName].value || [],
            errors: errors[inputName] || {},
            isSubmited,
            validationMethods: {
                setValues: (value) => {
                    setInputValue(inputName, value)
                },
                setErrors: (errorMessage) => {
                    changeError(inputName, errorMessage)
                },
            },

        }
    }
    const getValues = () => {
        const validatedData = {}
        for (const key in inputs) {
            if (!inputs[key].hidden && !inputs[key].readOnly) {
                if (!inputs[key].isOptional) {
                    validatedData[key] = inputs[key].value
                }
                else {
                    if (inputs[key].value) {
                        validatedData[key] = inputs[key].value
                    }
                }

            }
        }
        return validatedData
    }

    return { isSubmited, isEdited, inputs, errors, setValues, InputCondition, setInputValue, getInput, getModule, changeError, getValues, setSubmited, validateInputs }
}

export default useFormValidation