import css from './header.module.css'
import NavigationItem from './NavigationItem'
import user from "store/user";
import HeaderAction from './headerAction';

const Header = ({ user, actions = [] }) => {
    return (
        <header className={css.block}>
            <div className={css.logo}></div>
            <div className={css.navigation}>
                {actions.map((item, index) => <HeaderAction key={index} {...item} />)}
                <div className={css.user}>
                    <NavigationItem to='/accounts/profile' text={`${user?.data?.first_name} ${user?.data?.last_name}`} />
                    {user?.data?.avatar ? null : <img className={css.avatar} src={"https://lh3.googleusercontent.com/a/default-user=s36-c"} alt="" />}
                </div>
            </div>
        </header>
    )
}
export default Header