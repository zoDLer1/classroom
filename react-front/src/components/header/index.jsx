import NavigationItem from './HeaderNavigationItem'
import HeaderAction from './HeaderAction';
import { useHeaderInfo } from 'hooks/globalUI/useGlobalUI';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = ({ user }) => {
    const navigate = useNavigate()

    const { actions, isBackButton } = useHeaderInfo()

    return (
        <header className='bg-primary flex justify-between py-6 px-[70px] relative'>
            <div className='flex items-center'>
                <div>
                    <div>
                        {isBackButton && <HeaderAction icon={faArrowLeft} action={() => navigate(-1)} />}
                    </div>
                    <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 
                        {actions[0].map((item, index) => <HeaderAction key={index} {...item} />)}
                    </div>
                    <div>
                        {actions[1].map((item, index) => <HeaderAction key={index} {...item} />)}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <div className='flex items-center gap-5'>
                    <NavigationItem to='/accounts/profile' text={`${user?.data?.first_name} ${user?.data?.last_name}`} />
                    {user?.data?.avatar ? null : <img className='w-8 h-8 rounded-full' src={"https://lh3.googleusercontent.com/a/default-user=s36-c"} alt="" />}
                </div>
            </div>
        </header>
    )
}
export default Header