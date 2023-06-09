import { useState } from "react"

export const QUESTION__VALIDATOR = () => {
    return (value) => {
        const questionError = {}
        const nameValidationError = REQUIRED__VALIDATOR()(value.name)
        if (nameValidationError) {
            questionError['name'] = nameValidationError
        }
        return Object.keys(questionError).length ? questionError : ''
    }
}

export const QUESTIONS_VALIDATOR = () => {
    return (values, currentError, context) => {
        const { only, inputName } = context
        console.log(inputName)
        const getErrorsInit = () => {
            const initedErrors = {}
            for (let i = 0; values.length > i; i++){
                initedErrors[i] = {}
            }
            return initedErrors
        }

        const errors = currentError ? { ...currentError } : getErrorsInit()
        const setError = (index) => {
            const error = QUESTION__VALIDATOR()(values[index],)
            errors[index] = error || {}
        }
        
        if (only !== undefined) {
            setError(only)
        }
        else {
            for (let index = 0; values.length > index; index++) {
                setError(index)
            }
        }

        const hasErrors = Object.entries(errors).filter(([key, item]) => Object.keys(item).length).length

        return hasErrors ? errors : ''

    }
}




export const MAX_LENGTH__VALIDATOR = (length, errorMessage = `Максимальная длина ${length} символов`) => {
    return (value) => value.length > length ? errorMessage : ''
}
export const IS_EMAIL__VALIDATOR = (errorMessage = 'Введите корректный email') => {
    return (value) =>
        !value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ? errorMessage
            : ''

}
export const REQUIRED__VALIDATOR = (errorMessage = 'Поле не должно быть пустым') => {
    return (value) => !value ? errorMessage : ''
}
export const MIN_LENGTH__VALIDATOR = (length, errorMessage = `Минимальная длина ${length} символов`) => {
    return (value) => value.length < length ? errorMessage : ''
}
export const IS_EXTANTIONS__VALIDATOR = (extantions, errorMessage = `Недопустимое расширение`) => {
    return (value) => {
        for (const extantion of extantions) {
            if (extantion === value.type) {
                return ''
            }
        }
        return errorMessage
    }
}
export const DATE_IS_FUTURE__VALIDATOR = (errorMessage = `Некорректная дата`) =>
    (value) => Date.now() > value || value ? errorMessage : ''

export const PASSWORDS_MATCH__VALIDATOR = () => {
    let password1 = ''
    let password2 = ''

    const FIRST_PASSWORD__VALIDATOR = (errorMessage = 'Пароли не совпадают') => (value) => {
        password1 = value
        return match_passwords(errorMessage)
    }
    const SECOND_PASSWORD__VALIDATOR = (errorMessage = 'Пароли не совпадают') => (value) => {
        password2 = value
        return match_passwords(errorMessage)
    }

    const match_passwords = (errorMessage) => {
        return password1 !== password2 ? errorMessage : ''
    }

    return {
        FIRST_PASSWORD__VALIDATOR,
        SECOND_PASSWORD__VALIDATOR
    }

}