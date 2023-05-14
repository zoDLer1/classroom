import useValidate from "./useValidation"


function useInput({ value, validationMethods, getValue = (evt) => evt.target.value }) {
    const { onChanged } = useValidate({ value, ...validationMethods })
    const getProps = () => ({
        value,
        onChange: (evt) => {
            return onChanged(getValue(evt))
        }
    })
    return { getProps }
}

export default useInput
