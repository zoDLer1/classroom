import css from './members.module.css'
import Member from './member'
import Action from 'UI/Inputs/action'
import Popup from 'UI/Popup'
import { usePopup } from 'hooks/usePopup'
import InviteClassForm from 'components/forms/invite-class-form'
import Access from 'components/Access'
import user from 'store/user'

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
                            <Access current_permission={user.data.role} permission={2}>
                                <p className={css.text}>Добавить участников</p>
                                <Action text={"Добавить"} onClick={()=>hook.open()} icon={'fa-solid fa-user-plus'}/>
                            </Access>
                            
                        </div>
                        :<div className={css.members}>
                            {members.map(member=> <Member key={member.id} {...member}/>)}
                        </div>
                    }
                    
                </div>
                
            </div>
           
            
       </div>
       <Access current_permission={user.data.role} permission={2}>
        <Popup {...hook}>
                <InviteClassForm />
        </Popup>
       </Access>
       
        
        </>
       
        
        
        
    )
}

export default Members
