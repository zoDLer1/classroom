import css from '../css/footer.module.css'
import Button from 'UI/Button'


export default (props) =>  {

   


    return (
        <div className={css.view}>
            <Button onClick={props.addToClass} icon="fa-solid fa-plus" text='Add to class' />
            <Button icon="fa-solid fa-pen-to-square" text='Edit' />
            <Button bg='#D61414' icon="fa-solid fa-trash" text='Delete' />
            
        </div>
    )
}
