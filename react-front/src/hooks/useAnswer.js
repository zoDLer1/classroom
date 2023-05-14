export const useAnswer = ({ validationMethods }) => {
    const { validate, setValue } = validationMethods.AsModule

    const setAnswer = (value) => setValue([value])

    return { validate, setValue: setAnswer }
}