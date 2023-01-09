import css from './css/pageSection.module.css'



export default ({children, className}) =>  {
    return (
        <div className={[css.block, className].join(' ')}>
            {children}
        </div>
    )
}

