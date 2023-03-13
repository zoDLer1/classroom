import css from '../form-header.module.css'
import Button from 'UI/Inputs/Button'


export default (props) =>  {

    return (
        <div className={[css.block, css.view].join(' ')}>
            <h2 className={css.label}>{props.name}</h2>
            <p className={css.description}>{props.description}</p>
            <div className={css.footer}>
                <Button  text={'back'} icon='fa-solid fa-arrow-left' style={ {backgroundColor:'rgb(240, 167, 32)'}}/>
                <Button onClick={(evt)=> {evt.preventDefault(); props.start()}} text={'start'} icon='fa-solid fa-play' />
            </div>
        </div>
    )
}
