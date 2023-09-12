import css from './css/header.module.css'
import NavigationItem from './HeaderNavigationItem'
import HeaderAction from './HeaderAction';
import { useHeaderInfo } from 'hooks/globalUI/useGlobalUI';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = ({ user }) => {
    const navigate = useNavigate()

    const { actions, isBackButton } = useHeaderInfo()

    return (
        <header className={css.block}>
            <div className={css.logo}>
                <div className={css.actions}>
                    <div className={css.to_back}>
                        {isBackButton && <HeaderAction icon={faArrowLeft} action={() => navigate(-1)} />}
                    </div>
                    <div className={css.action_container}> 
                        {actions[0].map((item, index) => <HeaderAction key={index} {...item} />)}
                    </div>
                    <div>
                        {actions[1].map((item, index) => <HeaderAction key={index} {...item} />)}
                    </div>
                </div>
            </div>
            <div className={css.navigation}>
                <div className={css.user}>
                    <NavigationItem to='/accounts/profile' text={`${user?.data?.first_name} ${user?.data?.last_name}`} />
                    {user?.data?.avatar ? null : <img className={css.avatar} src={"https://lh3.googleusercontent.com/a/default-user=s36-c"} alt="" />}
                </div>
            </div>
        </header>
    )
}
export default Header