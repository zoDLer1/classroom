import css from './css/members.module.css'
import Member from '../components/lists/items/Member'
import Action from 'components/UI/inputs/Action'
import InviteClassForm from 'components/forms/InviteClassForm'
import Access from 'components/permissions/Access'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import User from '../components/lists/items/User'
import useRequest from 'hooks/requests/useRequest'
import ClassServise from 'services/ClassSevrice'
import Waiter from '../components/lists/items/Waiter'
import { usePermissions } from 'hooks/store/useUser'
import { useOutletContext } from 'react-router-dom'
import TitleList from 'components/lists/TitleList'



function ClassMembersPage() {

    const { data, setData } = useOutletContext()
    const permissions = usePermissions()
    const { isTeacher } = permissions

    const MemberItem = isTeacher ? Member : User
    const WaiterItem = isTeacher ? Waiter : User

    const setGlobalData = (key, items) => {
        const newData = { ...data }
        newData[key] = items
        setData((_data) => {
            return {
                ..._data,
                members: newData
            }
        })
    }
    const setMembers = (members) => setGlobalData('members', members)

    const setWaiters = (waiters) => setGlobalData('waiters', waiters)

    const [deleteMember, isDeleteMemberLoading] = useRequest(
        ClassServise.deleteMember,
        {
            204: (_, id) => {
                setMembers(data.members.filter(member => member.id !== id))
            }
        }
    )

    const [acceptWaiter, isAcceptWaiterLoading] = useRequest(
        ClassServise.acceptWaiter,
        {
            200: (resp, id) => {
                setWaiters(data.waiters.filter(waiter => waiter.id !== id))
                setMembers([...data.members, resp.data])
            }
        }
    )

    const [rejectWaiter, isRejectWaiterLoading] = useRequest(
        ClassServise.rejectWaiter,
        {
            200: (_, id) => {
                setMembers(data.waiters.filter(waiter => waiter.id !== id))
            }
        }
    )

    return (
        <div className='flex flex-col gap-12 px-5 py-3'>
            <TitleList
                title='Преподаватель'
                hidding
                useSwitch
            >
                {[<User {...data.creator} key={'teacher'} />]}
            </TitleList>
            <TitleList>
                {(data.waiters ?? []).map(waiter => <WaiterItem onAccept={acceptWaiter} isLoading={isAcceptWaiterLoading || isRejectWaiterLoading} onExcept={rejectWaiter} id={waiter.id} key={waiter.id} {...waiter.info} />)}
            </TitleList>
            <TitleList
                empty={
                    <Access permission={isTeacher}>
                        <p className='text-base'>Добавить участников</p>
                        <Action text={"Добавить"} icon={faPlus} />
                    </Access>
                }
                title={'Участники'}
                hidding
            >
                {data.members.map(member => <MemberItem isTeacher={isTeacher} onExcept={deleteMember} isLoading={isDeleteMemberLoading} key={member.id} id={member.id} {...member.info} />)}
            </TitleList>
        </div>
    )
}

export default ClassMembersPage


