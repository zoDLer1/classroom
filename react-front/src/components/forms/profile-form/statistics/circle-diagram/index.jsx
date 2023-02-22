import css from './css/circle-diagram.module.css'




// course: https://techrocks.ru/2022/01/11/pie-chart-in-pure-css-and-html/
export default (props) =>  {
    return (
        <div className={css.block}>
            <div className={[css.diagram, css.animate].join(' ')} style={{'--p':props.value}}>{props.value}%</div>
            <p className={css.text}>{props.text}</p>
        </div>
    )
}
