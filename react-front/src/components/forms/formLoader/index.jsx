import css from './form-loader.module.css'


const FormLoader = ({ children, condition }) =>  {
    return condition ? <i className={`${css.icon} fa-solid fa-spinner`}></i> : children
    
}
export default FormLoader
