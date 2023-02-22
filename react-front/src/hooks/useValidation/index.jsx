import { useState, useEffect } from "react";

export const IS_NOT_EMPTY = (errorText='') => {
    return {
        order: 0,
        name: "isNotEmpty",
        error: errorText ? errorText : "Поле не может быть пустым",
        func: (value) => Boolean(value)
    };
};

export const MIN_LENGTH = (min, errorText='') => {
    return {
        order: 1,
        name: "minLength",
        error: errorText ? errorText : `Используйте не менее ${min} символов`,
        func: (value) => value.length >= min
    };
};

export const MAX_LENGTH = (max, errorText='') => {
    return {
        order: 2,
        name: "maxLength",
        error: errorText ? errorText : `Используйте менее ${max} символов`,
        func: (value) => value.length <= max
    };
};

export const EMAIL_ADDRESS = (errorText='') => {
    return {
        order: 3,
        name: "emailAddress",
        error: errorText ? errorText : "Некорректный email",
        func: (value) => Boolean(value
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    };
};

const useValidation = (value, validations) => {
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        for (const validation of validations) {
            if (!validation.func(value)) {
                setError(validation.error)
                break;
            }
        }
    }, [value, validations]);

    return error;
}

export default useValidation;