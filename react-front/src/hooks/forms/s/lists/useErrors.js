import useDict from "./useDict"


const useErrors = (initialValue = {}) => {
    const [errors, setError_] = useDict(initialValue)

    const setError = (key, errorMessage) => setError_(key, new Error(errorMessage))

    return [errors, setError]
}
export default useErrors

export class Error {
    constructor(text = '') {
        this.text = text;
    }

    get has_error() {
        return Boolean(this.text);
    }
}