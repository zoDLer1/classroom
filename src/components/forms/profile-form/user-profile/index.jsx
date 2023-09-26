import css from './css/user-profile.module.css'
import Avatar from './avatar'

export default ({data}) =>  {
    return (
        <div className={css.block}>
            <h2 className={css.label}>Личная информация</h2>

            <div className={css.data}> 
                <div className={css.data_item}>
                    
                    <h5 className={css.title}>Фотография</h5>
                    <p className={css.decspiption}>Lorem ipsum dolor sit amet consectetur.</p>
                    <Avatar url={data.avatar}></Avatar>    
                </div>    
            </div>

        
            
        </div>
    )
}
