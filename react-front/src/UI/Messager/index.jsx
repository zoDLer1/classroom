import css from './css/messager.module.css'


const Messager = ({to, children}) =>  {

    return (
        <a className={css.icon} href={to}>
            {children}
        </a>
    )
}
export default Messager