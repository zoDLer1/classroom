import useFormValidation from './useFormValidation'

function useForm(InputsData, requestHook = []) {

    const [request, waitingForResponse] = requestHook

    const { changeError, getValidatedData, ...validation } = useFormValidation(InputsData)


    //     for (const [key, value] of Object.entries(inputs)) {
    //         setInputValue(key, value)
    //     }
    // }



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
        const validated_data = getValidatedData()
        if (validated_data) {
            await request(validated_data)
        }

    }
    return { getSubmit, changeError, handleServerErrors, ...validation }
}

export default useForm
