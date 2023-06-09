import { useEffect } from 'react'
import useFormValidation from './useFormValidation'

function useForm(InputsData, requestHook = []) {

    const [request, waitingForResponse] = requestHook



    const { errors, inputs, isSubmited, getValues, validateInputs, setSubmited, changeError, getValidatedData, ...validation } = useFormValidation(InputsData)

    


    useEffect(() => {
        if (isSubmited) {
            const error = validateInputs(Object.keys(inputs))
            console.log(error)
            console.log(errors)
            setSubmited(false)
            if (!Object.keys(errors).length && !error){
                request(getValues())
            }
            
        }
    }, [isSubmited])


    const handleServerErrors = (errors) => {
        for (const key in errors) {
            changeError(key, errors[key])
        }
    }
    const getSubmit = () => {
        return {
            onClick: onSubmit,
            loading: waitingForResponse
        }
    }
    const onSubmit = async () => {
        setSubmited(true)
    }
    return { inputs, errors, getValues, getSubmit, changeError, handleServerErrors, ...validation }
}

export default useForm
