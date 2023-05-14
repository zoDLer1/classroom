import css from './css/alert.module.css'


export default ({ isShowing, hide, info }) => {


    const AnimEnd = (evt) => {
        if (evt.animationName.startsWith('alert_opening'))
            hide()
    }

    if (isShowing) {
        return (
            <div onAnimationEnd={AnimEnd} className={css.block}>
                {info}
            </div>
        )
    }

}
