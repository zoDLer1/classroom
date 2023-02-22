import css from './css/popup.module.css'


function  Popup ({ condition, children, close }){

    return (
        <>
            {condition && 
                <div className={css.block} onClick={
                        (evt) => {
                            evt.stopPropagation()
                            close()
                        }
                    }> 
                    {children}
                </div>
            }
        </>
    )
}
export default Popup