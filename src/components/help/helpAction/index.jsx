import css from './css/help-adction.module.css'

export default (props) => {

    const blockStyle = {
        top: props.window.coords.y,
        left: props.window.coords.x,
        width: props.window.size.width,
        height: props.window.size.height
    }
    const infoStyle = {
        top: props.data.coords.y,
        left: props.data.coords.x,
        width: props.data.width
    }



    return (
        <>
            <div style={blockStyle} className={css.overlay}>
                <div style={infoStyle} className={[css.block, css[props.data.pointer.direction]].join(' ')}>
                    <div className={css.pointer}></div>
                    <div className={css.body}>
                        <h3 className={css.label}>{props.data.label}</h3>
                        <p className={css.info}>{props.data.info}</p>
                        <div className={css.footer}>

                            <p className={css.stage}>{props.current}/{props.total}</p>
                            <div className={css.btns}>
                                {props.current !== 1 && <div onClick={props.back} className={css.btn}>Back</div>}
                                {props.current !== props.total 
                                ? <div onClick={props.next} className={[css.btn, css.selected].join(' ')}>Next</div>
                                : <div onClick={props.end} className={[css.btn, css.selected].join(' ')}>End</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
