export const IS_REQUIRED = (value) => {
    return value.length
}

export const MAX_LENGTH = (max) => {
    return (value) =>{
        return value.length < max
    }
}

export const IS_EMAIL = (value) =>{
    return Boolean(value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
}