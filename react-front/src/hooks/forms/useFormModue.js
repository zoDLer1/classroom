import { useEffect } from "react";
import useFormValidation from "./useFormValidation";


function useFormModule(InputsData, { isSubmited, validationMethods }) {


    const { isEdited, inputs, errors, setSubmited, ...validation } = useFormValidation(InputsData)
    const { setError, setValue } = validationMethods

    useEffect(() => {
        if (isSubmited){
            validation.validateInputs(Object.keys(inputs))
            setSubmited(true)
        }
    }, [isSubmited])

    useEffect(() => {
        setValue(validation.getValues())
    }, [inputs])

    useEffect(() => {
        setError(errors)
    }, [errors])

    return { inputs, ...validation }
}
export default useFormModule