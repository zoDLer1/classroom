import css from './settings.module.css'
import Select from 'UI/Inputs/Select'
import Input from 'UI/Inputs/Input'
import Checkbox from 'UI/Inputs/Checkbox'
import TextArea from 'UI/Inputs/TextArea'
import Action from 'UI/Inputs/action'
// import Button from 'UI/Inputs/Button'


export default (props) =>  {

    return (
        <div className={css.block}>
            <div className={css.sections}>
                <div className={css.cutom}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Сведения</p>
                    </div>
                    <div className={css.inputs}>
                        <Input icon="fa-solid fa-pen" placeholder={'Название'}/>
                        <Input icon="fa-solid fa-cube" placeholder={'Предмет'}/>
                        <div className={css.textarea}>
                            <Input icon="fa-solid fa-pen" placeholder={'Описание'} />
                        </div>
                    </div> 
                </div>
                <div className={css.main}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Общие</p>
                    </div>
                    <div className={css.invites}>
                        <div className={css.invite_link}>
                            <p className={css.label}>Ссылка для приграшения:</p>
                            <div className={css.input}>
                                <Input icon="fa-solid fa-link" onChange={()=>""} value="https://google.com"/>
                                <div className={css.actions}>
                                    <Action text={'Поменять'} icon="fa-solid fa-arrow-right-arrow-left"/>
                                    <Action text={'Копировать'} icon="fa-regular fa-copy"/>
                                </div>
                            </div>
                        </div>  
                        
                    
                            
                            <div className={css.invite_code}>
                                <p className={css.label}>Код класса:</p>
                                <div className={css.invite_code}>
                                    <span>Р82LY3</span>
                                </div>
                            </div>
                    
                            
                            {/* <div className={css.input}>
                                <Select value='asdasd' options={[
                                    {id: 1, name: 'Открытый'},
                                    {id: 2, name: 'По приграшениям'},
                                    {id: 3, name: 'Закрытый'},
                                    
                                ]} 
                                placeholder='Тип'
                                icon="fa-solid fa-list-ol"
                                />
                            </div>
                            <Checkbox csolor='dark' text={'Разрешать другим пользователям просматривать список участников'}/> */}
                        
                    </div>
                </div> 
            </div>
            
            <div className={css.submit}>
                <Action text={'Сохранить'} icon="fa-solid fa-floppy-disk"/>
            </div>
            
        </div>
    )
}