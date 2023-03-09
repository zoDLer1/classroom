import css from '../css/footer.module.css'
import Button from 'UI/Inputs/Button'
import { useNavigate } from 'react-router-dom';

const FormFooter = ({ submit }) =>  {

   const navigate = useNavigate()
   

    return (
        <div className={css.block}>
            <div className={css.group}>
                <Button onClick={submit} text='Сохранить'/>
                <Button text='Вид'/>
            </div>
            <Button text='Назад' onClick={()=>navigate('/tests')}/>
        </div>
    )
}
export default FormFooter