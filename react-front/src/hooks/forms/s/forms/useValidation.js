import useDict from "../lists/useDict"

const useValidation = (errorsHook, customValidation) => {
    const [errors, setError] = errorsHook
    const [validators, setValidator, setValidators] = useDict()

    const runValidation = (values) => {
        let has_error = false

        for (const [key, value] of Object.entries(values)) {
            
            if (!validateValue(key, value)) {
                has_error = true
                
            }
        }
        return !has_error && customValidation(values, setError)
    }

    const validateValue = (key, value) => {
        const validatorsList = validators[key] || []
        if (typeof value === 'object') {
            
            return validatorsList(value)
        }
        else {
            const selfError = errors[key]
            for (const validator of validatorsList) {
                const error = validator.validate(value)
                if (error) {
                    setError(key, validator.errorMessage)
                    return false
                }
            }
            if (selfError && selfError.has_error) {
                setError(key, '')
            }
        }

        return true
    }

    return [validators, { runValidation, validateValue, setValidators, setValidator }]
}
export default useValidation