import useValidate from "./useValidation"


function useCheckBox({ value, validationMethods, getValue = (evt) => evt.target.checked }) {
    const { onChanged } = useValidate({ value, ...validationMethods })
    const getProps = () => ({
        checked: value,
        onChange: (evt) => {
            return onChanged(getValue(evt))
        }
    })
    return { getProps }
}

export default useCheckBox
