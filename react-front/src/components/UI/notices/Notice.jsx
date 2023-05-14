import css from './css/notice.module.css'


function Notice({ children }) {
  return (
    <div className={css.block}>
        {children}
    </div>
    
  )
}

export default Notice