import css from './header.module.css'
import NavigationItem from './NavigationItem'
import user from "store/user";
import { observer } from 'mobx-react-lite';
import HeaderAction from './headerAction';

const Header = observer(({ actions=[] }) => {
    return (
        <header className={css.block}>
            <div className={css.logo}></div>
            <div className={css.navigation}>
                {actions.map((item, index) => <HeaderAction key={index} {...item}/>)} 
                {
                    user.isAuth && user.data
                    ? 
                    <div className={css.user}>
                        {user.data.avatar && <img className={css.avatar} src={'https://avatars.mds.yandex.net/i?id=9950d0fcff49dfe85650bd0578579ee58f0d114d-5104820-images-thumbs&n=13'} alt="" />}
                        <NavigationItem to='/accounts/profile' text = {`${user.data.first_name} ${user.data.last_name}`} />
                    </div>
                    : <NavigationItem to='/accounts/login' text = 'Sign in' icon='fa-solid fa-arrow-right-to-bracket'/>
                }

               
            </div>
        </header>
    )
})
export default Header