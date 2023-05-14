import css from './css/members.module.css'
import Member from './components/Member'
import Action from 'components/UI/inputs/Action'
import InviteClassForm from 'components/forms/invite-class-form'
import Access from 'components/Access'
import { IsTeacher } from 'routes/Guards'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import User from './components/User'
import useRequest from 'hooks/useRequest'
import ClassServise from 'services/ClassSevrice'
import Waiter from './components/Waiter'


function Members({ members, waiters, teacher, setMembers, setWaiters }) {


    const isTeacher = IsTeacher()    
    const MemberItem = isTeacher ? Member : User
    const WaiterItem = isTeacher ? Waiter : User

    const [deleteMember, isDeleteMemberLoading] = useRequest(
        ClassServise.deleteMember,
        {
            204: (resp, id) => setMembers(members.filter(member => member.id !== id))
        }
    )

    const [acceptWaiter, isAcceptWaiterLoading] = useRequest(
        ClassServise.acceptWaiter,
        {
            200: (resp, id) => {
                setWaiters(waiters.filter(waiter => waiter.id !== id))
                setMembers([...members, resp.data])
            }
        }
    )

    const [rejectWaiter, isRejectWaiterLoading] = useRequest(
        ClassServise.rejectWaiter,
        {
            200: (resp, id) => {
                setWaiters(waiters.filter(waiter => waiter.id !== id))
            }
        }
    )


    return (

        <div className={css.block}>
            <div className={css.body}>
                <div className={css.teachers}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Преподаватель</p>
                    </div>
                    <div className={css.members}>
                        <User {...teacher} />
                    </div>
                </div>
                {
                    waiters?.length ?
                        <div className={css.students}>
                            <div className={css.heading}>
                                <p className={[css.text, css.title].join(' ')}>Ожидающие вступления</p>
                                <p className={css.text}>{waiters.length}</p>
                            </div>
                            <div className={css.members}>
                                {waiters.map(waiter => <WaiterItem onAccept={acceptWaiter} isLoading={isAcceptWaiterLoading || isRejectWaiterLoading} onExcept={rejectWaiter} id={waiter.id} key={waiter.id} {...waiter.info} />)}
                            </div>
                        </div>
                        : null
                }
                <div className={css.students}>
                    <div className={css.heading}>
                        <p className={[css.text, css.title].join(' ')}>Участники</p>
                        <p className={css.text}>{members.length}</p>
                    </div>

                    {
                        !members.length
                            ? <div className={css.empty}>
                                <Access permission={IsTeacher}>
                                    <p className={css.text}>Добавить участников</p>
                                    <Action text={"Добавить"} icon={faPlus} />
                                </Access>

                            </div>
                            : <div className={css.members}>
                                {members.map(member => <MemberItem isTeacher={isTeacher} onExcept={deleteMember} isLoading={isDeleteMemberLoading} key={member.id} id={member.id} {...member.info} />)}
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Members
