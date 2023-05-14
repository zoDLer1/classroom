import { useState } from "react"

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
        for (const extantion of extantions){
            if (extantion === value.type){
                return ''
            }
        }
        return errorMessage
    }
}
export const DATE_IS_FUTURE__VALIDATOR = (errorMessage = `Некорректная дата`) =>
    (value) =>  Date.now() > value || value  ? errorMessage : ''

export const PASSWORDS_MATCH__VALIDATOR = () =>{
    let password1 = ''
    let password2 = ''

    const FIRST_PASSWORD__VALIDATOR = (errorMessage = 'Пароли не совпадают') => (value) =>{
        password1 = value
        return match_passwords(errorMessage)
    }
    const SECOND_PASSWORD__VALIDATOR = (errorMessage = 'Пароли не совпадают') => (value) =>{
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