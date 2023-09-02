import { useEffect } from "react"
import useDict from "../lists/useDict"
import useErrors from "../lists/useErrors"
import useValidation from "./useValidation"

const useForm = (inputsSettings, {
    customValidation = () => true,
    onFormSubmit = (inputsValues) => alert(JSON.stringify(inputsValues)),
    waitForResponse = false
}) => {


    const [hiddenList, setHidden] = useDict()

    const [inputsValues, setValue, setValues] = useDict()

    const errorsHook = useErrors()

    // eslint-disable-next-line
    const [validators, { setValidator, validateValue, runValidation }] = useValidation(errorsHook, customValidation)

    const [inputsErrors, setError] = errorsHook



    // * set initial data in hooks
    useEffect(() => {
        for (const key in inputsSettings) {

            setValidator(key, inputsSettings[key]?.validators || [])
            setHidden(key, inputsSettings[key]?.hidden || false)
            if (!inputsSettings[key].isModule) {
                setValue(key, inputsSettings[key]?.value ?? '')
                setError(key, '')
            }
        }
    }, [])


    const triggerSubmit = (key) => {
        if ((inputsSettings[key].value || '') !== inputsValues[key] && inputsValues[key] !== undefined) {
            submitForm()
        }
    }

    const getInput = (key) => ({
        value: inputsValues[key] || '',
        error: inputsErrors[key] || '',
        hidden: hiddenList[key],
        isTriggerSubmit: inputsSettings[key].isTriggerSubmit || false,
        methods: {
            triggerSubmit: () => triggerSubmit(key),
            setValue: (value) => setValue(key, value),
            validate: (value) => validateValue(key, value)
        }
    })

    const getSubForm = (key) => {
        return {
            hidden: hiddenList[key],
            value: inputsValues[key] || [],
            error: inputsErrors[key] || [],
            methods: {
                setValue: (value) => setValue(key, value),
                setError: (value) => setError(key, value),
                setValidator: (validator) => setValidator(key, validator)
            }
        }
    }

    const submitForm = () => {
        if (runValidation(inputsValues)) {
            onFormSubmit(inputsValues)
        }
        else {
            // ! validation not passed
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submitForm()
    }

    const handleServerErrors = (errors) => {
        console.log(errors)
        for (const [key, error] of Object.entries(errors)) {
            setError(key, error)
        }

    }

    const getSubmit = () => {
        return { onClick: onSubmit, loading: waitForResponse }
    }
    return { inputsValues, inputsErrors, getInput, handleServerErrors, getSubmit, getSubForm, setHidden }

}
export default useForm


