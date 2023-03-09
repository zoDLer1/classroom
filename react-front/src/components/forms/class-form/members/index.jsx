import css from './members.module.css'
import Member from './member'
import Action from 'UI/Inputs/action'
import Popup from 'UI/Popup'
import { usePopup } from 'hooks/usePopup'
import InviteClassForm from 'components/forms/invite-class-form'


function Members({ teacher, members, expectations }) {
    
    const hook = usePopup()

    return (
        <>
            <div className={css.block}>
            <div className={css.body}>
                <div className={css.teachers}>
                <div className={css.heading}>
                    <p className={[css.text, css.title].join(' ')}>Преподаватель</p>
                </div>
                    <div className={css.members}>
                        <Member  {...teacher} />
                    </div>
                </div>
                {
                    expectations.length ?
                    <div className={css.students}>
                        <div className={css.heading}>
                            <p className={[css.text, css.title].join(' ')}>Ожидаюшие вступления</p>
                            <p className={css.text}>{expectations.length}</p>
                        </div>
                        <div className={css.members}>
                            {expectations.map(user=> <Member key={user.id} {...user}/>)}
                        </div>
                    </div>
                    : ''
                }
                <div className={css.students}>
                   
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Участники</p>
                        <p className={css.text}>{members.length}</p>
                    </div>

                    {
                        !members.length
                        ? <div className={css.empty}>
                            <p className={css.text}>Добавить участников</p>
                            <Action text={"Добавить"} onClick={()=>hook.open()} icon={'fa-solid fa-user-plus'}/>
                        </div>
                        :<div className={css.members}>
                            {members.map(member=> <Member key={member.id}s {...member}/>)}
                        </div>
                    }
                    
                </div>
                
            </div>
           
            
       </div>
       <Popup {...hook}>
            <InviteClassForm />

       </Popup>
        
        </>
       
        
        
        
    )
}

export default Members
