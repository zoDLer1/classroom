export const IS_NUMBER__ROOL = () => (value) => /^[0-9]{0,}$/i.test(value)

export const IS_NUMBER_BETBEEN = (min, max) => (value) => !value || (min < Number(value) && max > Number(value))